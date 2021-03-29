import React, { Component } from "react";
import { injectIntl } from "react-intl";
import Wrapper from '../../hoc/Wrapper';
import './profile.css';

class Notification extends Component {

    render() {
        return (
            <Wrapper>
                <div className="slider_area">
                    <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                        <div className="container" style={{ marginTop: '30px' }}>
                            <div className="main-body">

                                <nav aria-label="breadcrumb" className="main-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">{this.props.intl.formatMessage({ id: "home" })}</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">{this.props.intl.formatMessage({ id: "notifications" })}</li>
                                    </ol>
                                </nav>
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