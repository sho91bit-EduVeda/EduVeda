import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';
import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import './Header.css';
import eduvedaLogo from "./../../img/form-logo.png";
import EduVedaServices from "../../Services/EduVedaServices";

class Header extends Component {

  logoutHandler = () => {
    EduVedaServices.onLogout();
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
                            <Logo altVal="eduvedaLogoHeader" logoPath={eduvedaLogo} id="logo"/>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li>
                                        <Link className="active" to="/">
                                        {this.props.intl.formatMessage({ id: "home" })}
                                        </Link>
                                        </li>
                                        <li><Link to="">{this.props.intl.formatMessage({ id: "Courses" })}<i className="ti-angle-down" style={{paddingLeft:"5px"}}></i></Link>
                                          <ul className="submenu">
                                            <li >
                                              <Link to="#">{this.props.intl.formatMessage({ id: "Below 12th Std" })}<i className="ti-angle-right"/></Link>
                                              <ul className="submenu" style={{top:"0",left:"117%"}}>
                                                    <li><Link to="/syllabus">{this.props.intl.formatMessage({ id: "Syllabus" })}</Link></li>
                                                    <li><Link to="/mock-paper">{this.props.intl.formatMessage({ id: "Mock Paper" })}</Link></li>
                                                    <li><Link to="/books-publications">{this.props.intl.formatMessage({ id: "Books & Publications" })}</Link></li>
                                              </ul>
                                            </li>

                                            <li >
                                              <Link to="#">{this.props.intl.formatMessage({ id: "Government" })}<i className="ti-angle-right"/></Link>
                                              <ul className="submenu" style={{top:"0",left:"117%"}}>
                                                    <li><Link to="/upcoming-jobs">{this.props.intl.formatMessage({ id: "Upcoming Jobs" })}</Link></li>
                                                    <li><Link to="/upcoming-result">{this.props.intl.formatMessage({ id: "Upcoming Result" })}</Link></li>
                                                    <li><Link to="/upcoming-admit-cards">{this.props.intl.formatMessage({ id: "Upcoming Admit Cards" })}</Link></li>
                                                    <li><Link to="/mock-paper">{this.props.intl.formatMessage({ id: "Mock Paper" })}</Link></li>
                                                    <li><Link to="/syllabus">{this.props.intl.formatMessage({ id: "Syllabus" })}</Link></li>
                                                    <li><Link to="/books-publications">{this.props.intl.formatMessage({ id: "Books & Publications" })}</Link></li>

                                              </ul>
                                            </li>

                                            <li >
                                              <Link to="#">{this.props.intl.formatMessage({ id: "Professional" })}<i className="ti-angle-right"/></Link>
                                              <ul className="submenu" style={{top:"0",left:"117%"}}>
                                                    <li><Link to="/new-courses">{this.props.intl.formatMessage({ id: "New Courses" })}</Link></li>
                                                    <li><Link to="/mock-paper">{this.props.intl.formatMessage({ id: "Mock Paper" })}</Link></li>
                                                    <li><Link to="/syllabus">{this.props.intl.formatMessage({ id: "Syllabus" })}</Link></li>
                                                    <li><Link to="/placements">{this.props.intl.formatMessage({ id: "Upcoming Campus Placements" })}</Link></li>
                                              </ul>
                                            </li>

                                          </ul>
                                        </li>

                                        {/*<li><Link to="Courses.html">
                                        {this.props.intl.formatMessage({ id: "SarkariJobs" })}
                                        </Link></li>*/}
                                        <li><Link to="/aboutUs">
                                        {this.props.intl.formatMessage({ id: "About" })}
                                        </Link></li>
                                        {this.props.token ?
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
                                        </li> : null}
                                        <li><Link to="/contact">
                                        {this.props.intl.formatMessage({ id: "Contact" })}
                                        </Link></li>
                                        <li className="lang">
                                        <Link to="/" onClick={this.props.onLangChange}>
                                          {this.props.eduLang}
                                        </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                          <div className="main-menu d-none d-lg-block">
                            <div className="log_chat_area d-flex align-items-center">
                                {/* <div className="searchBox">
                                  <div className="searchInputDiv">
                                    <input type="text" placeholder="Search.." style={{backgroundColor: "#f6f3f3",border:"none"}}/>
                                    <button className="searchIcon"><i className="ti-search" style={{color: "grey"}}/></button>
                                    </div>
                                  </div> */}

                                  {this.props.user ?
                                    <div style={{paddingLeft: "60px"}}>
                                      <nav>
                                        <ul>
                                          <li>
                                            <i className="flaticon-user" style={{color:"white",paddingRight:"5px"}}></i>
                                            <Link className="login popup-with-form">{this.props.intl.formatMessage({ id: "account" })}</Link>
                                              <ul className="submenu">
                                                  <li><Link to="/notifications">
                                                  {this.props.intl.formatMessage({ id: "notifications" })}
                                                  {this.props.hasNotificationFlag ? <i className="material-icons" style={{fontSize: '15px', paddingTop: '5px',marginLeft: '5px'}}>&#xe7f4;</i> 
                                                  : <i className="material-icons" style={{fontSize: '15px',marginLeft: '5px'}}>&#xe7f5;</i>}
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
                                      <Link to= "" onClick={this.props.onLoginClick} className="login popup-with-form"  style={{paddingLeft: "60px"}}>
                                        <i className="flaticon-user"></i>
                                          <span>{this.props.intl.formatMessage({ id: "LogIn" })}</span>
                                      </Link>
                                    </div>
                                  }
                                  <div>
                                    <Link onClick={this.props.onLangChange} className="boxed_btn_orange">
                                      {this.props.eduLang}
                                    </Link>
                                  </div>

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
