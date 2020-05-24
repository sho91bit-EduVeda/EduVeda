import React, { Component } from "react";
import LoginDetails from "./../../Configs/LoginConfig";
import logo from "./../../img/form-logo.png";
import "./../../css/bootstrap.min.css";
import "./../../css/magnific-popup.css";
import "./../../css/font-awesome.min.css";
import "./../../css/themify-icons.css";
import "./../../css/nice-select.css";
import "./../../css/flaticon.css";
import "./../../css/gijgo.css";
import "./../../css/animate.css";
import "./../../css/slicknav.css";
import "./../../css/style.css";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser : props.loggedInUser,
      username: "",
      password: "",
      showRegister: false,
    };
  }

  componentDidMount(){
    this.props.onChange(this.state)
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
    LoginDetails.users.forEach((user) => {
      if (
        user.username === this.state.username &&
        user.password === this.state.password
      ) {
        this.setState({
          loggedInUser : user
        });
        this.props.onLoginChange({
          loggedInUser: this.state.loggedInUser,
        });
      }
    });
  };

  render() {
    return (
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex="-1"
        inlinestyle="overflow: hidden auto;"
      >
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content">
            <form id="test-form" className="white-popup-block">
              <div className="popup_box ">
                <div className="popup_inner">
                  <div className="logo text-center">
                    <img src={logo} alt="" />
                  </div>
                  <h3>Sign in</h3>
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
                  <p className="doen_have_acc">
                    Don’t have an account?{" "}
                    <button
                      className="dont-hav-acc link-button"
                      onClick={() => this.onSignUpClick(true)}
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
