import React from 'react';
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import titleImg from "./../../img/banner/edu_ilastration.png";
import titleImg2 from "./../../img/banner/edu_ilustration7.png";
import titleImg3 from "./../../img/banner/edu_ilustration6.png";
import titleImg4 from "./../../img/banner/edu_ilustration8.png";
import titleImg5 from "./../../img/banner/edu_ilustration9.png";

const sliderArea = (props) => {

  let user = props.loggedInUser;

  return (
    <Wrapper>
    <div className="slider_area">
      <div className="single_slider d-flex align-items-center justify-content-center slider_bg_new overlay2"> 
          <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-md-6">
              <div id="sliderImages" className="carousel slide" data-ride="carousel" style={{paddingBottom : '20px'}}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Logo id="illastrator_png" logoPath={titleImg} altVal="titleImg"/>
                  </div>
                  <div className="carousel-item">
                    <Logo id="illastrator_png" logoPath={titleImg2} altVal="titleImg2"/>
                  </div>
                  <div className="carousel-item">
                    <Logo id="illastrator_png" logoPath={titleImg3} altVal="titleImg3"/>
                  </div>
                  <div className="carousel-item">
                    <Logo id="illastrator_png" logoPath={titleImg4} altVal="titleImg4"/>
                  </div>
                  <div className="carousel-item">
                    <Logo id="illastrator_png" logoPath={titleImg5} altVal="titleImg5"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="slider_info">
                <h3>
                  {user && user.fullName ? props.intl.formatMessage({ id: "hi" })+user.fullName : props.intl.formatMessage({ id: "hi-guest" })}
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
