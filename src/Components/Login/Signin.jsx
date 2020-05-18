import React, { Component } from "react";
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
import "./../../css/mycss.css";
import logo from "./../../img/form-logo.png";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showRegister: false,
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
      showLogin : false
    });
  };

  onSignUpClick = (flag) => {
    this.props.onSignInChange({
      showLogin : false,
      showRegister : true
    });
  }

  render() {
    return (
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex="-1"
        inlinestyle="overflow: hidden auto;"
        onClick={()=>this.closePopup(true)}
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
                      <input type="email" placeholder="Enter email" />
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="col-xl-12">
                      <button type="submit" className="boxed_btn_orange">
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
