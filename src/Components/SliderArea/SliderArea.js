import React from 'react';
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import titleImg from "./../../img/banner/edu_ilastration.png";

const sliderArea = (props) => {
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
                  {props.loggedInUser.name != null ? "Hi, "+props.loggedInUser.name : "Hi, Guest"}
                  <br></br>
                  {props.intl.formatMessage({ id: "sliderAreaTitle" })}
                </h3>
                <Link to="/browse" className="boxed_btn">
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
