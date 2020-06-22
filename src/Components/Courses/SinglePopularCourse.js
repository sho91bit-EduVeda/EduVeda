import React from 'react';
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Wrapper from './../../hoc/Wrapper';
import Logo from './../Logo/Logo';
import course1 from './../../img/courses/1.png';

const singlePopularCourse = (props) => {
  return (
    <Wrapper>
    <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="single_courses">
          <Logo altVal={props.courseDetails.altValue} logoPath={course1} id="thumb"/>
            <div className="courses_info">
                <span>{props.courseDetails.name}</span>
                <h3><Link to="#">{props.courseDetails.desc}</Link></h3>
                <div className="star_prise d-flex justify-content-between">
                    <div className="star">
                        <i className="flaticon-mark-as-favorite-star"></i>
                        <span>({props.courseDetails.stars})</span>
                    </div>
                    <div className="prise">
                        <span className="offer">{props.courseDetails.offer}</span>
                        <span className="active_prise">
                            {props.courseDetails.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Wrapper>
  );
}

export default injectIntl(singlePopularCourse);
