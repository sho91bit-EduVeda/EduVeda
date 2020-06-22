import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Wrapper from './../../hoc/Wrapper';

import Modal from '../../Components/UI/Modal/Modal';
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

import "./../../css/bootstrap.min.css";
import "./../../css/owl.carousel.min.css";
import "./../../css/magnific-popup.css";
import "./../../css/font-awesome.min.css";
import "./../../css/themify-icons.css";
import "./../../css/nice-select.css";
import "./../../css/flaticon.css";
import "./../../css/gijgo.css";
import "./../../css/animate.css";
import "./../../css/slicknav.css";
import "./../../css/style.css";
import "./../../css/mycss.css";

import './../../js/owl.carousel.min.js';

class Main extends Component{

  state = {
    showLogin:false,
    showSignup:false
  }

  loginHandler = () => {
    this.setState({showLogin: true});
  }

  closeLoginHandler = () => {
    this.setState({showLogin: false});
  }

  showSignUpHandler = () => {
    this.setState({
      showLogin: false,
      showSignup:true
    });
  }

  closeSignupHandler = () => {
    this.setState({showSignup: false});
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

    render(){
        return(
        <BrowserRouter>
            <Wrapper>
                <Header onLangChange={()=>this.changeLanguage()} eduLang={this.getLinkName()} onLoginClick={this.loginHandler}/>
                <SliderArea/>
                <AboutArea/>
                <PopularCourses/>
                <Testimonials/>
                <Newsletter/>
                <Blogs/>
                <Footer/>

                <Modal show={this.state.showLogin} modalClosed={this.closeLoginHandler} >
                    <SignIn onLoginBtnClick={this.showSignUpHandler}/>
                </Modal>
                <Modal show={this.state.showSignup} modalClosed={this.closeSignupHandler}>
                    <SignUp/>
                </Modal>
            </Wrapper>
        </BrowserRouter>
        );
    }
}

export default Main;
