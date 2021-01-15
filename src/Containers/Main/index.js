import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Wrapper from './../../hoc/Wrapper';

import Modal from '../../Components/UI/Modal/Modal';
import Birthday from '../../Components/Birthday/Birthday';
import SignIn from '../../Components/Login/Signin';
import SignUp from '../../Components/Login/Signup';
import Header from '../../Components/Header/Header';
import SliderArea from '../../Components/SliderArea/SliderArea';
import AboutArea from '../../Components/AboutArea/AboutArea';
import PopularCourses from '../../Components/Courses/PopularCourses';
import Testimonials from '../../Components/Testimonial/Testimonials';
import Blogs from '../../Components/Blogs/Blogs';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';

import SignUpMain from '../../Components/Login/SignupMain';

class Main extends Component{

  componentDidMount () {
      this.props.onTryAutoSignup();
    }

  loginHandler = () => {
    this.props.showForm(true,false);
  }

  closeLoginHandler = () => {
    this.props.showForm(false,false);
  }

  showSignUpHandler = () => {
    this.props.showForm(false,true);
  }

  closeSignupHandler = () => {
    this.props.showForm(false,false);
  }

  closeSurpriseForm = () => {
    this.props.showSurpriseForm(false,true);
  }

  changeLanguage = () => {
    switch (window.lang) {
      case "hi":
        window.localStorage.setItem("language", "en-US");
        break;
      default:
        window.localStorage.setItem("language", "hi-IN");
    }
    window.location.reload();
  };

  getLinkName = () => {
    switch (window.lang) {
      case "hi":
        return "English";
      default:
        return "Hindi";
    }
  };

  showSurprise = () => {
    this.props.showSurpriseForm(true,true);
  }

    render(){

      const BirthdayComponent = this.props.isAuthenticated ?
        <Modal show={this.props.showSurprise} modalClosed={this.closeSurpriseForm} >
            <Birthday/>
        </Modal> : null;


        return(
        <BrowserRouter>
            <Wrapper>
                <Header onLangChange={()=>this.changeLanguage()} eduLang={this.getLinkName()} onLoginClick={this.loginHandler}/>
                <SliderArea isUserAuthenticated={this.props.isAuthenticated} loggedInUser={this.props.user} isBdayToday={this.props.isBdayToday}  onSurpriseButtonClick= {this.showSurprise}/>
                <AboutArea/>
                <PopularCourses/>
                <Testimonials/>
                <Newsletter/>
                <Blogs/>
                <Footer/>
                {BirthdayComponent}
                <Modal show={this.props.showLogin} modalClosed={this.closeLoginHandler} >
                  <SignUpMain/>
                </Modal>
                <Modal show={this.props.showSignup} modalClosed={this.closeSignupHandler}>
                    <SignUp/>
                </Modal>
            </Wrapper>
        </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        user : state.auth.user,
        showLogin : state.auth.showLogin,
        showSignup : state.auth.showSignup,
        isAuthenticated: state.auth.token !== null,
        isBdayToday: state.auth.isBirthdayToday,
        showSurprise: state.auth.showBdaySurprise
    };
};

const mapDispatchToProps = dispatch => {
  return {
    showForm: (showLogin,showSignup) => dispatch(actions.showLoginForm(showLogin,showSignup)),
    onTryAutoSignup: () => dispatch( actions.authCheckState() ),
    showSurpriseForm: (showBdaySurprise,isBdayToday) => dispatch(actions.showSurpriseForm(showBdaySurprise,isBdayToday))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(Main);
