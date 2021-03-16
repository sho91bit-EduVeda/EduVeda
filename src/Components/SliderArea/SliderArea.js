import React from 'react';
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import titleImg from "./../../img/banner/edu_ilastration.png";

const sliderArea = (props) => {

  let user = props.loggedInUser;

  return (
    <Wrapper>
    <div className="slider_area">
      <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1"> 
          <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-md-6">
            <Logo id="illastrator_png" logoPath={titleImg} altVal="titleImg"/>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="slider_info">
                <h3>
                  {user && user.fullName != null ? props.intl.formatMessage({ id: "hi" })+user.fullName : props.intl.formatMessage({ id: "hi-guest" })}
                  <br></br>
                  <span>{props.intl.formatMessage({ id: "sliderAreaTitle" })}</span>
                </h3>
                
                <Link to="/courses" className="boxed_btn">
                  {props.intl.formatMessage({ id: "BrowseOurCourses" })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  );
}

export default injectIntl(sliderArea);
