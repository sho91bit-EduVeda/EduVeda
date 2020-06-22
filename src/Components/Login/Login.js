import React, { Component } from "react";
import { injectIntl } from "react-intl";
import logo from "./../../img/logo.png";
import titleImg from "./../../img/banner/edu_ilastration.png";
import Signin from "../../Components/Login/Signin";
import Signup from "../../Components/Login/Signup.jsx";
import engLocale from "../../Locale/en.json";
import Langbar from './../LangBar/LangBar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      showLogin: false,
      showRegister: false,
    };
  }

  componentDidUpdate() {
    console.log("State after update: " + JSON.stringify(this.state));
  }

  onLoginClick = (flag) => {
    this.setState({
      showLogin: flag,
    });
  };

  onChange = (newValue) => {
    this.setState(newValue);
  };

  renderLogin = () => {
    return (
      <section>
        <div className="mfp-bg mfp-ready"></div>
        <Signin onSignInChange={this.onChange} />
      </section>
    );
  };

  renderRegister = () => {
    return (
      <section>
        <div className="mfp-bg mfp-ready"></div>
        <Signup onSignUpChange={this.onChange} />
      </section>
    );
  };

  render() {
    return (
      <section>
        <header>
          <div className="header-area ">
            <Langbar langChange={()=>this.changeLanguage()} langName={this.getLinkName()} user={this.state.user}/>
            <div id="sticky-header" className="main-header-area">
              <div className="container-fluid p-0">
                <div className="row align-items-center no-gutters">
                  <div className="col-xl-2 col-lg-2">
                    <div className="my-logo-img">
                      <a href="index.html">
                        <img src={logo} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a className="active" href="index.html">
                              {this.props.intl.formatMessage({ id: "home" })}
                            </a>
                          </li>
                          <li>
                            <a href="Courses.html">{engLocale.Courses}</a>
                          </li>
                          <li>
                            <a href="Courses.html">
                              {engLocale.pages}{" "}
                              <i className="ti-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="course_details.html">
                                  {engLocale.courseDetails}
                                </a>
                              </li>
                              <li>
                                <a href="elements.html">{engLocale.elements}</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about.html">{engLocale.About}</a>
                          </li>
                          <li>
                            <a href="about.html">
                              {engLocale.blog} <i className="ti-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">{engLocale.blog}</a>
                              </li>
                              <li>
                                <a href="single-blog.html">
                                  {engLocale.singleblog}
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">{engLocale.Contact}</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="log_chat_area d-flex align-items-center">
                      <button
                        className="login popup-with-form link-button"
                        onClick={() => this.onLoginClick(true)}
                      >
                        <i className="flaticon-user"></i>
                        <span>log in</span>
                      </button>
                      <div className="live_chat_btn">
                        <button className="boxed_btn_orange" href="#">
                          <i className="fa fa-phone"></i>
                          <span>+10 378 467 3672</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="slider_area">
          <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-md-6">
                  <div className="illastrator_png">
                    <img src={titleImg} alt="titleImg" />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="slider_info">
                    <h3>
                      Learn your <br></br>
                      Favorite Course <br></br>
                      From Online
                    </h3>
                    <a href="/browse" className="boxed_btn">
                      Browse Our Courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showLogin && this.renderLogin()}
        {this.state.showRegister && this.renderRegister()}
      </section>
    );
  }
}

export default injectIntl(Header);
