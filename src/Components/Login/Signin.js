import React, { Component } from "react";
import LoginDetails from "./../../Configs/LoginConfig";
import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import eduvedaLogo from "./../../img/form-logo.png";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      showRegister: false
    };
  }

  onUpdateField = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.onChange(name, this.checkAndRemoveWhiteSpaces(value));
  };

  checkAndRemoveWhiteSpaces = (str) => {
    return str.replace(/^\s+|\s+$|\s*(\s)/g, "$1");
  };

  onChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  closePopup = () => {
    this.props.onSignInChange({
      showLogin: false,
    });
  };

  onSignUpClick = (flag) => {
    this.props.onSignInChange({
      showLogin: false,
      showRegister: true,
    });
  };

  loginUser = () => {
    LoginDetails.users.forEach(user => {
      if (
        user.username === this.state.username &&
        user.password === this.state.password
      ) {
        this.props.onSignInChange({
          user: user,
          showLogin:false
        });
      }
    });
  };

  render() {
    return (
      <Wrapper>
          <div id="test-form" className="white-popup-block">
              <div className="popup_box ">
                  <div className="popup_inner">
                      <Logo altVal="eduvedaLogo" logoPath={eduvedaLogo} id="logo text-center"/>
                      <h3>Sign in</h3>
                      <form action="#">
                          <div className="row">
                              <div className="col-xl-12 col-md-12">
                              <input
                                type="text"
                                name="username"
                                placeholder="Enter Username"
                                onChange={this.onUpdateField}
                                onBlur={this.onUpdateField}
                              />
                              </div>
                              <div className="col-xl-12 col-md-12">
                              <input
                                type="text"
                                name="password"
                                placeholder="Password"
                                onChange={this.onUpdateField}
                                onBlur={this.onUpdateField}
                              />
                              </div>
                              <div className="col-xl-12">
                              <button
                                type="button"
                                className="boxed_btn_orange"
                                onClick={() => this.loginUser()}
                              >
                                Sign in
                              </button>
                              </div>
                          </div>
                      </form>
                      <p className="doen_have_acc">
                        Don’t have an account?{" "}
                        <button
                          className="dont-hav-acc link-button"
                          onClick={this.props.onLoginBtnClick}
                        >
                          Sign Up
                        </button>
                      </p>
                  </div>
              </div>
          </div>
      </Wrapper>
    );
  }
}

export default SignIn;
