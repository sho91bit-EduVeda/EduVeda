import React, { Component } from "react";
import { injectIntl } from "react-intl";
import Wrapper from "../../hoc/Wrapper";
import './../../Style/eduveda.css';


class AboutUs extends Component {
    render() {
        return (
            <Wrapper>
                <div className="slider_area">
                    <div className="bradcam_area aboutUs_bg overlay2 d-none d-lg-block">
                    </div>
                    <div className="bradcam_area slider_bg_new overlay2 d-block d-lg-none">
                        <h1 className="text-white">About Us</h1>
                    </div>
                </div>
                <div className="slider_area bg-white" >
          <div className="single_slider d-flex align-items-center justify-content-center ">

          </div>
          </div>
            </Wrapper>
        );
    }


}

export default injectIntl(AboutUs);