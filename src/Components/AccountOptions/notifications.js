import React, { Component } from "react";
import { injectIntl } from "react-intl";
import Wrapper from '../../hoc/Wrapper';
import './profile.css';

class Notification extends Component {

    render() {
        return (
            <Wrapper>
                <div className="slider_area">
                   
                    <div className="bradcam_area slider_bg_new overlay2">
                        <h1 className="text-white">Notifications</h1>
                    </div>
                </div>
                <div className="slider_area">
                    <div className="single_slider d-flex align-items-center justify-content-center" style={{height:'auto'}}>
                        <div className="container" style={{ backgroundColor:'white' }}>
                            <div className="main-body">

                                {this.props.eduvedaNotifications ?
                                    this.props.eduvedaNotifications.map((notification) => 
                                        <div className="success" style={{paddingTop:'10px', paddingBottom:'10px', marginBottom: '10px'}}>
                                            <strong style={{marginLeft : '5px'}}>{notification.name}!</strong> {notification.message}
                                        </div>
                                )
                                 : ''}

                            </div>
                        </div>

                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default injectIntl(Notification);