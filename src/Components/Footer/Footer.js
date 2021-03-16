import React from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import eduvedaLogo from "./../../img/form-logo.png";

const footer = (props) => {
  return (
    <Wrapper>
    <footer className="footer footer_bg_1">
      <div className="footer_top">
          <div className="container">
              <div className="row">
                  <div className="col-xl-4 col-md-6 col-lg-4">
                      <div className="footer_widget">
                      <Logo altVal="eduvedaLogoHeader" logoPath={eduvedaLogo} id="footer_logo"/>
                          <p>
                              Firmament morning sixth subdue darkness creeping gathered divide our let god moving.
                              Moving in fourth air night bring upon it beast let you dominion likeness open place day
                              great.
                          </p>
                          <div className="socail_links">
                              <ul>
                                  <li>
                                      <Link to="#">
                                          <i className="ti-facebook"></i>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link to="#">
                                          <i className="ti-twitter-alt"></i>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link to="#">
                                          <i className="fa fa-instagram"></i>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link to="#">
                                          <i className="fa fa-youtube-play"></i>
                                      </Link>
                                  </li>
                              </ul>
                          </div>

                      </div>
                  </div>
                  <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                      <div className="footer_widget">
                          <h3 className="footer_title">
                              {props.intl.formatMessage({ id: "Courses" })}
                          </h3>
                          <ul>
                              <li><Link to="#">Wordpress</Link></li>
                              <li><Link to="#"> Photoshop</Link></li>
                              <li><Link to="#">Illustrator</Link></li>
                              <li><Link to="#">Adobe XD</Link></li>
                              <li><Link to="#">UI/UX</Link></li>
                          </ul>

                      </div>
                  </div>
                  <div className="col-xl-2 col-md-6 col-lg-2">
                      <div className="footer_widget">
                          <h3 className="footer_title">
                              {props.intl.formatMessage({ id: "Resources" })}
                          </h3>
                          <ul>
                              <li><Link to="#">{props.intl.formatMessage({ id: "Resources" })}</Link></li>
                              <li><Link to="#">{props.intl.formatMessage({ id: "Tutorials" })}</Link></li>
                              <li><Link to="#"> {props.intl.formatMessage({ id: "About" })}</Link></li>
                              <li><Link to="#"> {props.intl.formatMessage({ id: "Contact" })}</Link></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-lg-3">
                      <div className="footer_widget">
                          <h3 className="footer_title">
                              {props.intl.formatMessage({ id: "Address" })}
                          </h3>
                          <p>
                              220, Baker's Street, London UK <br></br>
                              +1-438-929-(0150) <br></br>
                              shbhtshukla930@gmail.com
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="copy-right_text">
          <div className="container">
              <div className="footer_border"></div>
              <div className="row">
                  <div className="col-xl-12">
                      <p className="copy_right text-center">

Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link to="https://google.com" target="_blank">EduVeda</Link>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
    </Wrapper>
  );
}

export default injectIntl(footer);
