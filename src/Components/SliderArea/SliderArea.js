import React from 'react';
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import titleImg from "./../../img/banner/edu_ilastration.png";
import nidhiBdayImg from "./../../img/Nidhi_Bday/Nidhi_main.jpg";

const sliderArea = (props) => {

  const title_img = props.isUserAuthenticated && props.isBdayToday ? nidhiBdayImg : titleImg;
  const sliderAreaTitle = props.isUserAuthenticated && props.isBdayToday ? "This is your Birthday Today!! Let's celebrate it together!" : props.intl.formatMessage({ id: "sliderAreaTitle" });
  const sliderAreaButton = props.isUserAuthenticated && props.isBdayToday ?"Click Here for Surprise" : props.intl.formatMessage({ id: "BrowseOurCourses" });

  return (
    <Wrapper>
    <div className="slider_area">
      <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
          {props.isUserAuthenticated && props.isBdayToday ?
            <div className="container">
              <h1 style={{textAlign:"center",color:"white",paddingTop:"40px",paddingBottom:"20px",textTransform: "uppercase"}}>HAPPY BIRTHDAY {props.loggedInUser.name}!!<i className="fa fa-birthday-cake" style={{paddingLeft:"5px",color:"white"}}></i></h1>
                <div className="row align-items-center justify-content-center">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={title_img} alt="Avatar" style={{height:"410px", width:"1000px"}}/>
                      </div>
                      <div className="flip-card-back" style={{height:"410px", width:"1000px"}}>
                        <h2 style={{color:"red"}}>MY DEAR WIFEY<i className="fa fa-heart" style={{paddingLeft:"5px",fontSize:"24px",color:"red"}}></i></h2>
                        <h4>You once said to me that you never recieved any Love letter from anyone.
                        So I am writing you this love letter on your Birthday just to let you know how Special you are to me.
                        <br/><br/>
                        I am the luckiest person alive on this planet... Do you know why?
                        Because on 14th Feb 2019, I got married to this pretty girl..
                        I will get short of words in order to describe her qualities... but here are some of them...
                        She is loving, caring, naughty, cute, jolly etc. etc. etc.
                        <br/>
                        I have spend my one of the best time with you till date and expect to spend the rest of my life
                         even more happily.
                         You loved me, you teased me, you made fun of me and also you took so good care of me when I was not feeling well.
                         I would like to thank you for all this.
                         <br/><br/>
                         I want to say one last thing that <span style={{color:"red"}}>I LOVE YOU MY QUEEN</span> and Bhagwan aisi biwi mere alawa kisi aur ko na de...
                         </h4>
                         <h2 style={{textAlign:"right"}}>From:</h2><h3 style={{textAlign:"right",color:"red"}}> Your Loving Husband</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row row align-items-center justify-content-center" style={{paddingTop:"40px"}}>
                  <Link className="boxed_btn" onClick={props.onSurpriseButtonClick}>
                    {sliderAreaButton}
                  </Link>
                  </div>
                </div>
                </div>
          :
          <div className="container">
            <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-md-6">
            <Logo id="illastrator_png" logoPath={title_img} altVal="titleImg"/>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="slider_info">
                <h3>
                  {props.loggedInUser.fullName != null ? "Hi, "+props.loggedInUser.fullName : "Hi, Guest"}
                  <br></br>
                  <span>{sliderAreaTitle}</span>
                </h3>
                <Link className="boxed_btn">
                  {sliderAreaButton}
                </Link>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
    </Wrapper>
  );
}

export default injectIntl(sliderArea);
