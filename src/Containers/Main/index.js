import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from './../../Firebase/index';

import Wrapper from './../../hoc/Wrapper';

import Modal from '../../Components/UI/Modal/Modal';
import Authentication from '../../Components/Login/Authentication';
import AuthMobile from '../../Components/Login/AuthMobile';
import Header from '../../Components/Header/Header';
import Profile from '../../Components/AccountOptions/profile';
import Notification from '../../Components/AccountOptions/notifications';
import SliderArea from '../../Components/SliderArea/SliderArea';
import ContactUs from '../../Components/SliderArea/ContactUs';
import AboutUs from '../../Components/SliderArea/AboutUs';
import AboutArea from '../../Components/AboutArea/AboutArea';
import PopularCourses from '../../Components/Courses/PopularCourses';
import Testimonials from '../../Components/Testimonial/Testimonials';
import Blogs from '../../Components/Blogs/Blogs';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';

import EduVedaServices from './../../Services/EduVedaServices';

class Main extends Component {

  state = {
    user: '',
    userUid: '',
    error: {
      hasLoginError: false,
      errorCode: ''
    },
    successMessageFlag: false,
    showLogin: false,
    clearFields: false,
    showSignUp: false,
    showForgotPassword: false,
    hasNotifications: false,
    notifications: [],
    isUserSubscribed: false
  }

  signUpHandler = (userData) => {
    console.log(JSON.stringify(userData));
    EduVedaServices.eduvedaSignUpUsingEmail(userData.email, userData.passwordOne).then(authUser => {
      EduVedaServices.createUserRecordOnSignUp(authUser.uid, userData);
      EduVedaServices.getLoggedInUser(authUser.uid).then(user => {
        this.setState({
          user,
          userUid: authUser.uid,
          showLogin: false
        });
        window.location.pathname === "/auth" ? window.location.pathname = "/" : this.closeLoginHandler();
      });
    }).catch(error => {
      let errorCode = error.code;
      this.setState({
        error: {
          hasLoginError: true,
          errorCode: errorCode
        }
      });
    });

  }

  fetchNotificationsFromEduVeda = () => {
    EduVedaServices.getAllNotifications().then(response => {
      this.setState({
        notifications: response
      });
    });
  }

  logInHandler = (email, password) => {
    EduVedaServices.eduvedaLogIn(email, password).then(response => {
      EduVedaServices.getLoggedInUser(response.uid).then(user => {
        this.fetchNotificationsFromEduVeda();
        this.setState({ user, userUid: response.uid });
        window.location.pathname === "/auth" ? window.location.pathname = "/" : this.closeLoginHandler();
      });
    }).catch(error => {
      let errorCode = error.code;
      this.setState({
        error: {
          hasLoginError: true,
          errorCode: errorCode
        }
      });
    });

  }

  providerLoginHandler = (authProvider) => {
    EduVedaServices.eduvedaLogInWithProvider(authProvider).then(providerResponse => {
      EduVedaServices.getLoggedInUser(providerResponse.userId).then(user => {
        this.fetchNotificationsFromEduVeda();
        this.setState({ user, userUid: providerResponse.userId });
      }).catch(error => {
        console.log("User not found");
        const userData = {
          fullName: providerResponse.fullName,
          email: providerResponse.email.trim(),
          loginMethod: "ProviderLogin",
          photoURL: providerResponse.photoURL
        };
        EduVedaServices.createUserRecordOnSignUp(providerResponse.userId, userData);
        EduVedaServices.getLoggedInUser(providerResponse.userId).then(user => {
          this.fetchNotificationsFromEduVeda();
          this.setState({ user, userUid: providerResponse.userId });
        });
      });
      this.closeLoginHandler();
    }).catch(error => {
      console.log("Provider Error: " + error);
      let errorCode = error.code;
      this.setState({
        error: {
          hasLoginError: true,
          errorCode: errorCode
        }
      });
    });
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        if (authUser.providerData[0].providerId === 'google.com' || authUser.providerData[0].providerId === 'facebook.com') {
          EduVedaServices.getLoggedInUser(authUser.providerData[0].uid).then(user => {
            this.fetchNotificationsFromEduVeda();
            this.setState({ user, userUid: authUser.providerData[0].uid });
          });
        } else {
          EduVedaServices.getLoggedInUser(authUser.uid).then(user => {
            this.setState({ user, userUid: authUser.uid });
          });
        }

      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  showLoginForm = () => {
    this.setState({
      showLogin: true,
      clearFields: true
    });
  }

  closeLoginHandler = () => {
    this.setState({
      error: {
        hasLoginError: false,
        errorCode: ''
      },
      showLogin: false,
      clearFields: false,
      showSignUp: false
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
      showSignUp: true,
      error: {
        hasLoginError: '',
        errorCode: ''
      }
    });
  }

  goToLogin = () => {
    this.setState({
      showSignUp: false,
      showForgotPassword: false,
      error: {
        hasLoginError: '',
        errorCode: ''
      }
    });
  }

  goToForgotPassword = () => {
    console.log("Hi");
    this.setState({
      showSignUp: false,
      showForgotPassword: true,
      error: {
        hasLoginError: '',
        errorCode: ''
      }
    });
  }

  resetPwdHandler = (email) => {
    EduVedaServices.fetchSignInMethodUsingEmail(email).then(loginProvider => {
      if (loginProvider === "password") {
        EduVedaServices.eduvedaResetPassword(email).then(response => {
          this.setState({
            successMessageFlag: true
          });
        }).catch(error => {
          this.setState({
            error: {
              hasLoginError: true,
              errorCode: error.code
            }
          });
        });
      } else {
        this.setState({
          error: {
            hasLoginError: true,
            errorCode: "provider-reset-pwd"
          }
        });
      }
    });


  }

  updateProfileHandler = (uid, userData) => {
    EduVedaServices.updateUserProfile(uid, userData).then(response => {
      EduVedaServices.getLoggedInUser(uid).then(user => {
        this.setState({ user, userUid: uid });
      });
    }).catch(error => {
      this.setState({
        error: {
          hasLoginError: true,
          errorCode: "update-profile-error"
        }
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Header
          isUserSubscribed={this.state.isUserSubscribed}
          user={this.state.user}
          onLangChange={this.changeLanguage}
          eduLang={this.getLinkName()}
          onLoginClick={this.showLoginForm}
        />

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
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs userUid={this.state.userUid} />
        </Route>
        <Route exact path="/profile">
          <Profile loggedInUserUid={this.state.userUid} loggedInUser={this.state.user} onUpdateProfile={this.updateProfileHandler} />
        </Route>
        <Route exact path="/notifications">
          <Notification user={this.state.user} eduvedaNotifications={this.state.notifications} />
        </Route>
        <Route exact path="/auth">
          <AuthMobile eduvedalogInHandler={this.logInHandler} 
          showSignUp={this.state.showSignUp}
          onBackToLogin={this.goToLogin}
          onForgotPassword={this.goToForgotPassword}
          showForgotPassword={this.state.showForgotPassword} 
          eduvedaResetPwdHandler={this.resetPwdHandler}
          eduvedaSignUpHandler={this.signUpHandler}
          hasSuccessMsg={this.state.successMessageFlag}
          validationError={this.state.error}
          onSignUpLinkClick={this.goToSignUp}/>
        </Route>
        <Footer />
        <Modal show={this.state.showLogin} modalClosed={this.closeLoginHandler}>
          <Authentication
            resetFields={this.state.clearFields}
            hasSuccessMsg={this.state.successMessageFlag}
            validationError={this.state.error}
            eduvedaResetPwdHandler={this.resetPwdHandler}
            eduvedaSignUpHandler={this.signUpHandler}
            eduvedalogInHandler={this.logInHandler}
            onProviderLogin={this.providerLoginHandler}
            showSignUp={this.state.showSignUp}
            onSignUpLinkClick={this.goToSignUp}
            onBackToLogin={this.goToLogin}
            onForgotPassword={this.goToForgotPassword}
            showForgotPassword={this.state.showForgotPassword} />
        </Modal>
      </BrowserRouter>
    );
  }
}

export default Main;
