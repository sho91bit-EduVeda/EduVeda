import React, { Component } from "react";
import { injectIntl } from "react-intl";
import Wrapper from '../../hoc/Wrapper';
import './../../Style/eduveda.css';

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName : '',
			lastName : '',
			email : '',
            phoneNumber : '',
            streetAddress1 : '',
            streetAddress2 : '',
            city : '',
            state : '',
            country : '',
            pinCode : ''
        }
    }

    render() {
        return (
            <Wrapper>
                <div className="slider_area">
                    <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                        <div className="container">
                            <form id="profile-form">
                            <div className="input-container">
                                <label>First Name: </label>
                                <input className="input-field" type="text" placeholder="firstName" name="usrnm"/>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default injectIntl(Profile);