import React, { Component } from "react";
import { injectIntl } from "react-intl";
import Wrapper from '../../hoc/Wrapper';
import './../../Style/eduveda.css';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            email: '',
            phoneNumber: '',
            mobileNumber: '',
            address: '',
            photoURL: '',
            updateProfileFlag: false
        }
    }

    inputChangedHandler = (event, controlName) => {
        this.setState({
            [controlName]: event.target.value
        });
    }

    editProfile = () => {
        this.setState({
            fullName: this.props.loggedInUser.fullName,
            gender: this.props.loggedInUser.gender ? this.props.loggedInUser.gender : "Male",
            email: this.props.loggedInUser.email,
            phoneNumber: this.props.loggedInUser.phoneNumber ? this.props.loggedInUser.phoneNumber : '',
            mobileNumber: this.props.loggedInUser.mobileNumber ? this.props.loggedInUser.mobileNumber : '',
            address: this.props.loggedInUser.address ? this.props.loggedInUser.address : '',
            photoURL: this.props.loggedInUser.photoURL ? this.props.loggedInUser.photoURL : '',
            updateProfileFlag: true
        });
    }

    cancelProfileEdit = () => {
        this.setState({
            updateProfileFlag: false,
            fullName: this.props.loggedInUser.fullName,
            email: this.props.loggedInUser.email,
            gender: this.props.loggedInUser.gender,
            phoneNumber: this.props.loggedInUser.phoneNumber,
            mobileNumber: this.props.loggedInUser.mobileNumber,
            photoURL: this.props.loggedInUser.photoURL,
            address: this.props.loggedInUser.address
        });
    }

    onUpdateProfile = () => {
        const userData = {
            fullName: this.state.fullName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            mobileNumber: this.state.mobileNumber,
            address: this.state.address,
            gender: this.state.gender,
            photoURL: this.state.photoURL
        };
        this.props.onUpdateProfile(this.props.loggedInUserUid, userData);
        this.setState({
            updateProfileFlag: false
        });
    }

    render() {
        return (
            <Wrapper>
                <div className="slider_area">
                    <div className="bradcam_area slider_bg_new overlay2" style={{padding: '135px 0 75px 0'}}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={this.props.loggedInUser.photoURL ? this.props.loggedInUser.photoURL : "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4>{this.props.loggedInUser.fullName}</h4>
                                        <p className="text-secondary mb-1" style={{ fontWeight: 'bold' }}>{this.props.loggedInUser.roles}</p>
                                        <p className="text-muted font-size-sm">{this.props.loggedInUser.address}</p>
                                        {/* <button className="btn btn-primary">Follow</button>
                                                        <button className="btn btn-outline-primary">Message</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slider d-flex align-items-center justify-content-center bg-white"  style={{height:'auto', paddingTop:'30px' }}>
                        <div className="container bg-white">
                            <div className="main-body">

                                <div className="row gutters-sm">
                                    <div className="col-md-4 mb-3">

                                        <div className="card mt-3">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                                    <span className="text-secondary">@{this.props.loggedInUser.fullName}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                                    <span className="text-secondary">@{this.props.loggedInUser.fullName}</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontWeight: 'bold' }}>{this.props.intl.formatMessage({ id: "fullName" })}</h6>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        {this.state.updateProfileFlag ?
                                                            <input id='fullName' type='text' className="form-control"
                                                                value={this.state.fullName}
                                                                onChange={(event) => this.inputChangedHandler(event, "fullName")} />
                                                            : this.props.loggedInUser.fullName}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontWeight: 'bold' }}>{this.props.intl.formatMessage({ id: "gender" })}</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        {this.state.updateProfileFlag ?
                                                            <select id="gender" className="form-control" value={this.state.gender} onChange={(event) => this.inputChangedHandler(event, "gender")}>
                                                                <option value="Male">{this.props.intl.formatMessage({ id: "Male" })}</option>
                                                                <option value="Female">{this.props.intl.formatMessage({ id: "Female" })}</option>
                                                            </select>
                                                            : this.props.loggedInUser.gender}

                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontWeight: 'bold' }}>{this.props.intl.formatMessage({ id: "email" })}</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        {this.props.loggedInUser.email}

                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontWeight: 'bold' }}>{this.props.intl.formatMessage({ id: "phone" })}</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        {this.state.updateProfileFlag ?
                                                            <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(event) => this.inputChangedHandler(event, "phoneNumber")} />
                                                            : this.props.loggedInUser.phoneNumber}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontWeight: 'bold' }}>{this.props.intl.formatMessage({ id: "mobile" })}</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        {this.state.updateProfileFlag ?
                                                            <input type="tel" className="form-control" id="mobileNumber" name="mobileNumber" value={this.state.mobileNumber} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(event) => this.inputChangedHandler(event, "mobileNumber")} />
                                                            : this.props.loggedInUser.mobileNumber}

                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0" style={{ fontWeight: 'bold' }}>{this.props.intl.formatMessage({ id: "address" })}</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        {this.state.updateProfileFlag ?
                                                            <input id='address' type='text' className="form-control"
                                                                value={this.state.address}
                                                                onChange={(event) => this.inputChangedHandler(event, "address")} />
                                                            : this.props.loggedInUser.address}

                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="container">
                                                    {this.state.updateProfileFlag ? 
                                                    <button type="button" className="btn btn-danger" style={{backgroundColor:'#c82333'}} onClick={this.cancelProfileEdit}>{this.props.intl.formatMessage({ id: "cancel" })}</button> 
                                                    : <button type="button" className="btn btn-warning" style={{backgroundColor:'#e0a800'}} onClick={this.editProfile}>{this.props.intl.formatMessage({ id: "editProfile" })}</button>}
                                                    <button type="button" className="btn btn-success" style={{backgroundColor:'#28a745'}} onClick={this.onUpdateProfile} disabled={!this.state.updateProfileFlag}>{this.props.intl.formatMessage({ id: "submit" })}</button>
                                                    
                                                </div>
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

export default injectIntl(Profile);