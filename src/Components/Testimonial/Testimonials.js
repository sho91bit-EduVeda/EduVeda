import React from 'react';
import { injectIntl } from "react-intl";
import Wrapper from './../../hoc/Wrapper';
import authorImg from './../../img/testmonial/author_img.png';

const testimonials = (props) => {
  return (
    <Wrapper>
        <div className="testimonial_area testimonial_bg_1 overlay">
            <div className="testmonial_active owl-carousel">
                <div className="single_testmoial">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testmonial_text text-center">
                                    <div className="author_img">
                                        <img src={authorImg} alt=""/>
                                    </div>
                                    <p>
                                        "Working in conjunction with humanitarian aid <br></br> agencies we have supported
                                        programmes to <br></br>
                                        alleviate.
                                        human suffering.

                                    </p>
                                    <span>- Jquileen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single_testmoial">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testmonial_text text-center">
                                    <div className="author_img">
                                        <img src={authorImg} alt=""/>
                                    </div>
                                    <p>
                                        "Working in conjunction with humanitarian aid <br></br> agencies we have supported
                                        programmes to <br></br>
                                        alleviate.
                                        human suffering.

                                    </p>
                                    <span>- Jquileen</span>
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

export default injectIntl(testimonials);
