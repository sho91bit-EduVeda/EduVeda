import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';
import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';

import eduvedaLogo from "./../../img/form-logo.png";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      showLogin: false,
      showRegister: false,
    };
  }

  render() {
    return (
      <Wrapper>
      <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
            {/*<Langbar langChange={this.props.onLangChange} langName={this.props.eduLang} user={this.state.user}/>*/}
                <div className="container-fluid p-0">
                    <div className="row align-items-center no-gutters">
                        <div className="col-xl-2 col-lg-2">
                            <Logo altVal="eduvedaLogo" logoPath={eduvedaLogo} id="logo text-center"/>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li>
                                        <Link className="active" to="index.html">
                                        {this.props.intl.formatMessage({ id: "home" })}
                                        </Link>
                                        </li>
                                        <li><Link to="Courses.html">
                                        {this.props.intl.formatMessage({ id: "Courses" })}
                                        </Link></li>
                                        <li><Link to="#">{this.props.intl.formatMessage({ id: "Pages" })} <i className="ti-angle-down"></i></Link>
                                            <ul className="submenu">
                                                <li><Link to="course_details.html">{this.props.intl.formatMessage({ id: "courseDetails" })}</Link></li>
                                                <li><Link to="elements.html">{this.props.intl.formatMessage({ id: "elements" })}</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="Courses.html">
                                        {this.props.intl.formatMessage({ id: "SarkariJobs" })}
                                        </Link></li>
                                        <li><Link to="about.html">
                                        {this.props.intl.formatMessage({ id: "About" })}
                                        </Link></li>
                                        <li><Link to="#">
                                        {this.props.intl.formatMessage({ id: "blog" })}
                                         <i className="ti-angle-down"></i></Link>
                                            <ul className="submenu">
                                                <li><Link to="blog.html">
                                                {this.props.intl.formatMessage({ id: "blog" })}
                                                </Link></li>
                                                <li><Link to="single-blog.html">
                                                {this.props.intl.formatMessage({ id: "singleblog" })}
                                                </Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="contact.html">
                                        {this.props.intl.formatMessage({ id: "Contact" })}
                                        </Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 main-menu d-none d-lg-block">
                            <div className="log_chat_area d-flex align-items-center">
                                <div className="login popup-with-form">
                                  {this.state.user.name !== undefined ? <span><strong>Hi,{this.state.user.name}</strong></span> :

                                    <Link to= "" onClick={this.props.onLoginClick} className="login popup-with-form">
                                      <i className="flaticon-user"></i>
                                        <span>{this.props.intl.formatMessage({ id: "LogIn" })}</span>
                                    </Link>
                                  }
                                  </div>

                                <div className="live_chat_btn">
                                    <Link to= "" onClick={this.props.onLangChange} className="boxed_btn_orange">
                                      {this.props.eduLang}
                                    </Link>
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
    </Wrapper>
    );
  }
}

export default injectIntl(Header);
