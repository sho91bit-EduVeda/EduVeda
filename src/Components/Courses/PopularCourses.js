import React,{ Component } from 'react';
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';

import Wrapper from './../../hoc/Wrapper';
import SinglePopularCourse from './SinglePopularCourse';
import PopCourses from "./../../Configs/Courses";

class PopularCourses extends Component {

  state= {
    courses:[]
  }

  componentDidMount() {
      this.setState({
        courses: PopCourses
      });
  }

  render () {
  return (
    <Wrapper>
    <div className="popular_courses">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title text-center mb-100">
                        <h3>{this.props.intl.formatMessage({ id: "PopularCoursesTitle" })}</h3>
                        <p>{this.props.intl.formatMessage({ id: "PopularCourseDesc" })}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="course_nav">
                        <nav>
                            <ul className="nav" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab"
                                        aria-controls="home" aria-selected="true">All Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="profile-tab" data-toggle="tab" to="#profile" role="tab"
                                        aria-controls="profile" aria-selected="false">Photoshop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="#contact" role="tab"
                                        aria-controls="contact" aria-selected="false">UI/UX</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="design-tab" data-toggle="tab" to="#design" role="tab"
                                        aria-controls="design" aria-selected="false">Web Design</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="Web-tab" data-toggle="tab" to="#Web" role="tab"
                                        aria-controls="design" aria-selected="false">Web dev</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="Web-tab1" data-toggle="tab" to="#Web1" role="tab"
                                        aria-controls="design" aria-selected="false">Wordpress</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="Web-tab11" data-toggle="tab" to="#Web11" role="tab"
                                        aria-controls="design" aria-selected="false">Adobe XD</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="Adobe-XD-tab8" data-toggle="tab" to="#Adobe-XD8" role="tab"
                                        aria-controls="design" aria-selected="false">Sketch App</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="Adobe-XD-tab9" data-toggle="tab" to="#Adobe-XD9" role="tab"
                                        aria-controls="design" aria-selected="false">Illustrator</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
        <div className="all_courses">
            <div className="container">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                                      {this.state.courses.map((course,i) =>
                                        <SinglePopularCourse key={i} courseDetails={course}/>
                                      )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                            {this.state.courses.map((course,i) =>
                              <SinglePopularCourse key={i} courseDetails={course}/>
                            )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row">
                            {this.state.courses.map((course,i) =>
                              <SinglePopularCourse key={i} courseDetails={course}/>
                            )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                            <div className="row">
                            {this.state.courses.map((course,i) =>
                              <SinglePopularCourse key={i} courseDetails={course}/>
                            )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="Web" role="tabpanel" aria-labelledby="Web-tab">
                            <div className="row">
                            {this.state.courses.map((course,i) =>
                              <SinglePopularCourse key={i} courseDetails={course}/>
                            )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="Web1" role="tabpanel" aria-labelledby="Web-tab1">
                            <div className="row">
                            {this.state.courses.map((course,i) =>
                              <SinglePopularCourse key={i} courseDetails={course}/>
                            )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="Web11" role="tabpanel" aria-labelledby="Web-tab11">
                            <div className="row">
                            {this.state.courses.map((course,i) =>
                              <SinglePopularCourse key={i} courseDetails={course}/>
                            )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="Adobe-XD8" role="tabpanel" aria-labelledby="Adobe-XD8">
                            <div className="row">
                            {this.state.courses.map((course,i) =>
                              <SinglePopularCourse key={i} courseDetails={course}/>
                            )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="tab-pane fade" id="Adobe-XD9" role="tabpanel" aria-labelledby="Adobe-XD-tab9">
                            <div className="row">
                            {this.state.courses.map((course,i) =>
                              <SinglePopularCourse key={i} courseDetails={course}/>
                            )}
                                    <div className="col-xl-12">
                                        <div className="more_courses text-center">
                                            <Link to="#" className="boxed_btn_rev">{this.props.intl.formatMessage({ id: "MoreCourses" })}</Link>
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
}

export default injectIntl(PopularCourses);
