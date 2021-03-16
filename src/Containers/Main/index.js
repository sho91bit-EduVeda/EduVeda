import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import firebase from './../../Firebase/index';

import Wrapper from './../../hoc/Wrapper';

import Modal from '../../Components/UI/Modal/Modal';
import Authentication from '../../Components/Login/Authentication';
import Header from '../../Components/Header/Header';
import Profile from '../../Components/Profile/profile';
import SliderArea from '../../Components/SliderArea/SliderArea';
import AboutArea from '../../Components/AboutArea/AboutArea';
import PopularCourses from '../../Components/Courses/PopularCourses';
import Testimonials from '../../Components/Testimonial/Testimonials';
import Blogs from '../../Components/Blogs/Blogs';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';

import EduVedaServices from './../../Services/EduVedaServices';

class Main extends Component{

  state = {
    user : '',
    error : {
      hasLoginError : false,
      errorCode : ''
    },
    successMessageFlag: false,
    showLogin : false,
    clearFields : false,
    showSignUp : false,
    showForgotPassword : false,
    hasNotifications : false
  }

  signUpHandler = (fullName , roles , email , phoneNumber, passwordOne) => {
    EduVedaServices.eduvedaSignUpUsingEmail(email,passwordOne).then(authUser => {
      EduVedaServices.createUserRecordOnSignUp(authUser.uid, fullName, email.trim(), phoneNumber, roles,"EmailLogin");
      EduVedaServices.getLoggedInUser(authUser.uid).then(user => {
        this.setState({
          user,
          showLogin : false
        });
      });
    });
  }

  logInHandler = (email , password) => {
		EduVedaServices.eduvedaLogIn(email, password).then(response => {
			EduVedaServices.getLoggedInUser(response.uid).then(user => {
				this.setState({user});
        this.closeLoginHandler();
			});
		}).catch(error => {
      console.log("LogIn error: "+JSON.stringify(error));
      let errorCode = error.code;
      this.setState({
        error : {
          hasLoginError : true,
          errorCode : errorCode
        } 
      });
    });
    
	}

  providerLoginHandler = (authProvider) => {
    EduVedaServices.eduvedaLogInWithProvider(authProvider).then(providerResponse => {
        EduVedaServices.createUserRecordOnSignUp(providerResponse.userId, providerResponse.fullName, providerResponse.email.trim(), providerResponse.phoneNumber, providerResponse.roles,"ProviderLogin");
        EduVedaServices.getLoggedInUser(providerResponse.userId).then(user => {
          this.setState({user});
          this.closeLoginHandler();
        });
    }).catch(error => {
      console.log("Provider Error: "+error);
      let errorCode = error.code;
      this.setState({
        error : {
          hasLoginError : true,
          errorCode : errorCode
        } 
      });
    });
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(authUser => {
      if(authUser) {
        if(authUser.providerData[0].providerId === 'google.com' || authUser.providerData[0].providerId === 'facebook.com') {
          EduVedaServices.getLoggedInUser(authUser.providerData[0].uid).then(user => {
            this.setState({user});
          });
        } else {
          EduVedaServices.getLoggedInUser(authUser.uid).then(user => {
            this.setState({user});
          });
        }
        
      }
    });
  }

  componentDidMount () {
      this.authListener();
    }

  showLoginForm = () => {
    this.setState({
      showLogin : true,
      clearFields : true
    });
  }

  closeLoginHandler = () => {
    this.setState({
      error : {
        hasLoginError : false,
        errorCode : ''
      },
      showLogin : false,
      clearFields : false,
      showSignUp : false
    });
  }

  changeLanguage = () => {
    switch (window.lang) {
      case "hi":
        window.localStorage.setItem("language", "en-US");
        break;
      default:
        window.localStorage.setItem("language", "hi-IN");
    }
    window.location = window.location.href;
  };

  getLinkName = () => {
    switch (window.lang) {
      case "hi":
        return "English";
      default:
        return "Hindi";
    }
  };

  goToSignUp = () => {
		this.setState({
      clearFields : true,
			showSignUp : true
		});
	}

	goToLogin = () => {
		this.setState({
      clearFields : true,
			showSignUp : false,
      showForgotPassword : false
		});
	}

  goToForgotPassword = () => {
    this.setState({
      clearFields : true,
			showSignUp : false,
      showForgotPassword : true
		});
  }

  resetPwdHandler = (email) => {
    EduVedaServices.fetchSignInMethodUsingEmail(email).then(loginProvider => {
      console.log("loginProvider: "+JSON.stringify(loginProvider));
      if(loginProvider === "password") {
        EduVedaServices.eduvedaResetPassword(email).then(response => {
          console.log("Reset Password Response: " + JSON.stringify(response));
          this.setState({
            successMessageFlag : true
          });
        }).catch(error => {
          console.log("Reset Password Error: " + JSON.stringify(error));
        });
      } else{
        this.setState({
          error: {
            hasLoginError : true,
            errorCode : "provider-reset-pwd"
          }
        });
      }
    });
    
    
  }

  render() {
    return (
      <BrowserRouter>
        <Header hasNotificationFlag={this.state.hasNotifications} user={this.state.user} onLangChange={this.changeLanguage} eduLang={this.getLinkName()} onLoginClick={this.showLoginForm} />
        <Route exact path="/">
          <Wrapper>
            <SliderArea loggedInUser={this.state.user} />
            <AboutArea />
            <PopularCourses />
            <Testimonials />
            <Newsletter />
            <Blogs />
          </Wrapper>
        </Route>
        <Route exact path="/profile">
            <Profile/>
        </Route>
        <Footer />
        <Modal show={this.state.showLogin} modalClosed={this.closeLoginHandler} >
          <Authentication resetFields={this.state.clearFields} hasSuccessMsg={this.state.successMessageFlag} validationError={this.state.error} eduvedaResetPwdHandler={this.resetPwdHandler} eduvedaSignUpHandler={this.signUpHandler} eduvedalogInHandler={this.logInHandler} onProviderLogin={this.providerLoginHandler} showSignUp={this.state.showSignUp} onSignUpLinkClick={this.goToSignUp} onBackToLogin={this.goToLogin} onForgotPassword={this.goToForgotPassword} showForgotPassword={this.state.showForgotPassword} />
        </Modal>
      </BrowserRouter>
    );
  }
}

export default Main;
