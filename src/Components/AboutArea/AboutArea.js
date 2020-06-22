import React from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Wrapper from './../../hoc/Wrapper';

const aboutArea = (props) => {
  return (
    <Wrapper>
    <div className="about_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6">
                    <div className="single_about_info">
                        <h3>{props.intl.formatMessage({ id: "AboutAreaH3" })}</h3>
                        <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god
                            moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open
                            place day great wherein heaven sixth lesser subdue fowl </p>
                        <Link to="#" className="boxed_btn">{props.intl.formatMessage({ id: "EnrollCourse" })}</Link>
                    </div>
                </div>
                <div className="col-xl-6 offset-xl-1 col-lg-6">
                    <div className="about_tutorials">
                        <div className="courses">
                            <div className="inner_courses">
                                <div className="text_info">
                                    <span>20+</span>
                                    <p> {props.intl.formatMessage({ id: "Courses" })}</p>
                                </div>
                            </div>
                        </div>
                        <div className="courses-blue">
                            <div className="inner_courses">
                                <div className="text_info">
                                    <span>7638</span>
                                    <p> {props.intl.formatMessage({ id: "Courses" })}</p>
                                </div>

                            </div>
                        </div>
                        <div className="courses-sky">
                            <div className="inner_courses">
                                <div className="text_info">
                                    <span>230+</span>
                                    <p> {props.intl.formatMessage({ id: "Courses" })}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Wrapper>
  );
}

export default injectIntl(aboutArea);
