import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';
import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import './Header.css';
import eduvedaLogo from "./../../img/form-logo.png";
import EduVedaServices from "../../Services/EduVedaServices";

class Header extends Component {
  constructor(props) {

    super(props);

    this.state = {
      isHomeSelected: window.location.pathname === '/' ? true : false,
      isContactUsSelected: window.location.pathname === '/contact-us' ? true : false,
      isAboutUsSelected: window.location.pathname === '/about-us' ? true : false
    }
  }

  onContactUsSelect = () => {
    this.setState({
      isHomeSelected: false,
      isContactUsSelected: true,
      isAboutUsSelected: false
    });
  }

  onAboutUsSelect = () => {
    this.setState({
      isHomeSelected: false,
      isContactUsSelected: false,
      isAboutUsSelected: true
    });
  }

  onHomeSelect = () => {
    this.setState({
      isHomeSelected: true,
      isContactUsSelected: false,
      isAboutUsSelected: false
    });

  }

  logoutHandler = () => {
    EduVedaServices.onLogout();
  }

  render() {
    return (
      <Wrapper>
        <header>
          <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
              <div className="container-fluid p-0">
                <div className="row align-items-center no-gutters">
                  <div className="col-xl-2 col-lg-2 logo-align">
                    <Logo altVal="eduvedaLogoHeader" logoPath={eduvedaLogo} id="logo" />
                  </div>
                  <div className="col-xl-5 col-lg-5">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <Link className={this.state.isHomeSelected ? "active" : ""} to="/" onClick={this.onHomeSelect}>
                              {this.props.intl.formatMessage({ id: "home" })}
                            </Link>
                          </li>

                          {this.props.user ?
                            <Wrapper>
                              <li><Link to="/">
                                {this.props.intl.formatMessage({ id: "blog" })}
                                <i className="ti-angle-down"></i></Link>
                                <ul className="submenu">
                                  <li><Link to="blogs">
                                    {this.props.intl.formatMessage({ id: "blog" })}
                                  </Link></li>
                                  <li><Link to="single-blog">
                                    {this.props.intl.formatMessage({ id: "singleblog" })}
                                  </Link></li>
                                </ul>
                              </li>
                              <li><Link to="">{this.props.intl.formatMessage({ id: "Courses" })}<i className="ti-angle-down" style={{ paddingLeft: "5px" }}></i></Link>
                                <ul className="submenu">
                                  <li >
                                    <Link to="#">{this.props.intl.formatMessage({ id: "Below 12th Std" })}<i className="ti-angle-right" /></Link>
                                    <ul className="submenu" style={{ top: "0", left: "117%" }}>
                                      <li><Link to="/syllabus">{this.props.intl.formatMessage({ id: "Syllabus" })}</Link></li>
                                      <li><Link to="/mock-paper">{this.props.intl.formatMessage({ id: "Mock Paper" })}</Link></li>
                                      <li><Link to="/books-publications">{this.props.intl.formatMessage({ id: "Books & Publications" })}</Link></li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </Wrapper>
                            : ''}
                          <li><Link to="/about-us" className={this.state.isAboutUsSelected ? "active" : ""} onClick={this.onAboutUsSelect}>
                            {this.props.intl.formatMessage({ id: "About" })}
                          </Link></li>

                          <li><Link to="/contact-us" onClick={this.onContactUsSelect} className={this.state.isContactUsSelected ? "active" : ""}>
                            {this.props.intl.formatMessage({ id: "Contact" })}
                          </Link></li>
                          <hr style={{ margin: '0px 0px' }} />
                          <li className="d-block d-lg-none"><Link to="/notifications">
                                      {this.props.intl.formatMessage({ id: "notifications" })}
                                      {this.props.user.notifFlag ? <i className="material-icons" style={{ fontSize: '15px', paddingTop: '5px', marginLeft: '5px' }}>&#xe7f4;</i>
                                        : <i className="material-icons" style={{ fontSize: '15px', marginLeft: '5px' }}>&#xe7f5;</i>}
                                    </Link></li>

                          <li className="d-block d-lg-none">
                            <Link to="/profile">
                              {this.props.intl.formatMessage({ id: "profile" })}
                            </Link>
                          </li>

                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5">
                    <div className="main-menu d-none d-lg-block">
                      <div className="log_chat_area d-flex align-items-center">
                        {this.props.user ?
                          <div style={{ paddingLeft: "60px" }}>
                            <nav>
                              <ul>
                                <li>
                                  <i className="flaticon-user" style={{ color: "white", paddingRight: "5px" }}></i>
                                  <Link to="" className="login popup-with-form">{this.props.intl.formatMessage({ id: "account" })}</Link>
                                  <ul className="submenu">
                                    <li><Link to="/notifications">
                                      {this.props.intl.formatMessage({ id: "notifications" })}
                                      {this.props.user.notifFlag ? <i className="material-icons" style={{ fontSize: '15px', paddingTop: '5px', marginLeft: '5px' }}>&#xe7f4;</i>
                                        : <i className="material-icons" style={{ fontSize: '15px', marginLeft: '5px' }}>&#xe7f5;</i>}
                                    </Link></li>
                                    <li><Link to="/profile">
                                      {this.props.intl.formatMessage({ id: "profile" })}
                                    </Link></li>
                                    <li><a href="/" onClick={this.logoutHandler}>
                                      {this.props.intl.formatMessage({ id: "logout" })}
                                    </a></li>
                                  </ul>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          :
                          <div>
                            <Link to="" onClick={this.props.onLoginClick} className="login popup-with-form" style={{ paddingLeft: "60px" }}>
                              <i className="flaticon-user"></i>
                              <span>{this.props.intl.formatMessage({ id: "LogIn" })}</span>
                            </Link>
                          </div>
                        }
                        <div>
                          <Link to="" onClick={this.props.onLangChange} className="boxed_btn" style={{ padding: '12px 25px' }}>
                            {this.props.eduLang}
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-4">

                    <span className="d-lg-none">
                      <Link to="/login" onClick={this.props.onLangChange} className="text-white" style={{ padding: '12px 25px' }}>
                        {this.props.eduLang === 'Hindi' ? 'HI' : 'EN'}
                      </Link>
                    </span>

                  </div>
                  <div className="col-6">


                    <span className="d-lg-none float-right">
                      {this.props.user ?


                        <a href="/" className="text-white" onClick={this.logoutHandler}>
                          <i className="fa fa-sign-out" style={{ fontSize: '20px', marginRight: '5px' }}></i>
                          {this.props.intl.formatMessage({ id: "logout" })}
                        </a>

                        :
                        <li className="d-block d-lg-none">

                          <Link to="/auth" className="text-white text-capitalize">
                            <i className="flaticon-user"></i>
                            <span style={{ marginLeft: '5px' }}>{this.props.intl.formatMessage({ id: "LogIn" })}</span>
                          </Link>
                        </li>
                      }
                    </span>

                  </div>
                  <div className="col-12 align-middle d-lg-none" style={{ marginTop: '8px' }}>

                    <div className="mobile_menu d-block d-lg-none">

                    </div>
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
