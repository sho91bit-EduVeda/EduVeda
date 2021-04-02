import React, { Component } from "react";
import { injectIntl } from "react-intl";
import Wrapper from '../../hoc/Wrapper';
import './profile.css';

class Notification extends Component {

    render() {
        return (
            <Wrapper>
                <div className="slider_area">

                    <div className="bradcam_area slider_bg_new overlay2" style={{padding: '135px 0 130px 0'}}>
                        <h1 className="text-white">Notifications</h1>
                    </div>
                </div>
                <div className="slider_area">
                <div className="single_slider d-flex align-items-center justify-content-center bg-white"  style={{height:'auto', paddingTop:'30px' }}>
                        <div className="container bg-white">
                            <div className="main-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Notification Description</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.eduvedaNotifications ?
                                            this.props.eduvedaNotifications.map((notification) =>
                                                <tr>
                                                    <th scope="row">{notification.name}</th>
                                                    <td>{notification.message}</td>
                                                    <td></td>
                                                </tr>)
                                            : ''}
                                    </tbody>
                                </table>



                            </div>
                        </div>

                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default injectIntl(Notification);