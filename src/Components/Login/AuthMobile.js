import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';
import Wrapper from '../../hoc/Wrapper';
import { googleAuthProvider, facebookAuthProvider } from "../../Firebase/authMethods";

const activeOptionClassName = "btn btn-secondary active";

class AuthMobile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            userType: 'Student',
            gender: 'Male',
            resetFields: false,
            isSignInSelected : true,
            isSignUpSelected : false,
            isProviderLoginSelected : false
        }
    }

    inputChangedHandler = (event, controlName) => {
        this.setState({
            [controlName]: event.target.value
        });
    }

    submitLoginHandler = (event) => {
        event.preventDefault();
        this.props.eduvedalogInHandler(this.state.email, this.state.password);
    }

    submitSignUpHandler = (event) => {
		event.preventDefault();
        const user = {
            fullName : this.state.firstName + " " + this.state.lastName,
			roles : this.state.userType,
			email : this.state.email,
			passwordOne : this.state.password,
			gender : this.state.gender
        }
		this.props.eduvedaSignUpHandler(user);
	}

    onForgotPassword = () => {
        this.props.onForgotPassword();
        this.setState({
            email: ''
        });
    }

    submitForgotPwdRequest = (event) => {
        event.preventDefault();
        this.props.eduvedaResetPwdHandler(this.state.email);
    }

    onSignInSelect = () => {
        this.props.onBackToLogin();
        this.setState({
            email: '',
            password: '',
            firstName : '',
            lastName : '',
            isSignInSelected : true,
            isSignUpSelected : false,
            isProviderLoginSelected : false
        });
    }

    onSignUpSelect = () => {
        this.props.onSignUpLinkClick();
        this.setState({
            email: '',
            password: '',
            firstName : '',
            lastName : '',
            isSignInSelected : false,
            isSignUpSelected : true,
            isProviderLoginSelected : false
        });
    }

    onProviderSelect = () => {
        
        this.setState({
            email: '',
            password: '',
            firstName : '',
            lastName : '',
            isSignInSelected : false,
            isSignUpSelected : false,
            isProviderLoginSelected : true
        });
    }

    renderForgotPasswordSetion = () => {
        return (
            <div className="single_slider d-flex align-items-center justify-content-center " style={{ height: '40vh' }}>
                <form style={{ width: '80%' }} onSubmit={this.submitForgotPwdRequest}>

                    <div>
                        <label htmlFor="forgotPwd" className="font-weight-bold text-dark">{this.props.intl.formatMessage({ id: "forgot-pwd-label" })}</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputEmail1" className="font-weight-bold">Email address</label>
                        <input type="email"
                            value={this.state.email}
                            className="form-control"
                            id="inputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(event) => this.inputChangedHandler(event, "email")}
                            onBlur={(event) => this.inputChangedHandler(event, "email")}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required />

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div style={{ paddingTop: '5px' }}>
                        <i style={{ fontSize: '18px', marginRight: '10px' }} className="fa text-dark">&#xf060;</i><Link className="text-dark font-weight-bold justify-content-center" onClick={this.onBackToLogin}>{this.props.intl.formatMessage({ id: "back-to-login" })}</Link>
                    </div>
                </form>
            </div>
        );
    }

    renderSignInSection = () => {
        return (
            <div className="single_slider d-flex align-items-center justify-content-center " style={{ height: '60vh' }}>
                
                <form style={{ width: '80%' }} onSubmit={this.submitLoginHandler}>

                    <div className="form-group">
                        {this.props.validationError.hasLoginError ?
                            <div className="alert alert-danger" style={{marginTop:'10px', padding: '1px 8px'}}>
                                <label>{this.props.intl.formatMessage({ id: this.props.validationError.errorCode })}</label>
                            </div> : ''}
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">{this.props.intl.formatMessage({ id: "email"})}</label>
                        <input type="email"
                            value={this.state.email}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder={this.props.intl.formatMessage({ id: "email-placeholder"})}
                            onChange={(event) => this.inputChangedHandler(event, "email")}
                            onBlur={(event) => this.inputChangedHandler(event, "email")}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required />
                        <small id="emailHelp" className="form-text text-muted">{this.props.intl.formatMessage({ id: "email-disclaimer"})}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="font-weight-bold">{this.props.intl.formatMessage({ id: "password"})}</label>
                        <input type="password"
                            value={this.state.password}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder={this.props.intl.formatMessage({ id: "pwd-placeholder"})}
                            onChange={(event) => this.inputChangedHandler(event, "password")}
                            onBlur={(event) => this.inputChangedHandler(event, "password")}
                            pattern=".{8,}"
                            required />
                    </div>
                    <div>
                        <label htmlFor="exampleCheck1" className="font-weight-bold"><Link onClick={this.onForgotPassword}>{this.props.intl.formatMessage({ id: "forgot-pwd"})}</Link></label>
                    </div>

                    <button type="submit" className="btn btn-primary">{this.props.intl.formatMessage({ id: "submit"})}</button>
                </form>
            </div>
        );
    }

    renderSignUpSection = () => {
        return (
            <div className="single_slider d-flex align-items-center justify-content-center " style={{ height: 'auto', paddingTop:'10px',paddingBottom:'10px' }}>
                
                <form style={{ width: '80%' }} onSubmit={this.submitSignUpHandler}>

                    <div className="form-group">
                        {this.props.validationError.hasLoginError ?
                            <div className="alert alert-danger" style={{marginTop:'10px', padding: '1px 8px'}}>
                                <label>{this.props.intl.formatMessage({ id: this.props.validationError.errorCode })}</label>
                            </div> : ''}

                            <label htmlFor="fullName" className="font-weight-bold">{this.props.intl.formatMessage({ id: "fullName"})}</label>
                            <div className="row">
                                <div className="col" style={{padding: '0px 16px'}}>
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder={this.props.intl.formatMessage({ id: "firstName-placeholder"})} 
                                    aria-label="First name"
                                    value={this.state.firstName}
                                    onChange={(event) => this.inputChangedHandler(event, "firstName")}
                                    onBlur={(event) => this.inputChangedHandler(event, "firstName")}
                                    required/>
                                </div>
                                <div className="col" style={{padding: '0px 16px'}}>
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder={this.props.intl.formatMessage({ id: "lastName-placeholder"})} 
                                    aria-label="Last name"
                                    value={this.state.lastName}
                                    onChange={(event) => this.inputChangedHandler(event, "lastName")}
                                    onBlur={(event) => this.inputChangedHandler(event, "lastName")}
                                    required/>
                                </div>
                            </div>

                            <label htmlFor="gender" className="font-weight-bold" style={{paddingTop:'10px'}}>{this.props.intl.formatMessage({ id: "gender"})}</label>
                            <select className="form-control" id="gender" required value={this.state.gender} onChange={( event ) => this.inputChangedHandler(event, "gender")}>
                                <option selected>--Select--</option>
                                <option value="Male">{this.props.intl.formatMessage({ id: "Male"})}</option>
                                <option value="Female">{this.props.intl.formatMessage({ id: "Female"})}</option>
                                <option value="Other">{this.props.intl.formatMessage({ id: "Other"})}</option>
                            </select>
                        <label htmlFor="inputEmail" className="font-weight-bold" style={{paddingTop:'10px'}}>{this.props.intl.formatMessage({ id: "email"})}</label>
                        <input type="email"
                            value={this.state.email}
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                            placeholder={this.props.intl.formatMessage({ id: "email-placeholder"})}
                            onChange={(event) => this.inputChangedHandler(event, "email")}
                            onBlur={(event) => this.inputChangedHandler(event, "email")}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required />

                    <label htmlFor="inputPassword1" className="font-weight-bold" style={{paddingTop:'10px'}}>{this.props.intl.formatMessage({ id: "password"})}</label>
                        <input type="password"
                            value={this.state.password}
                            className="form-control"
                            id="inputPassword1"
                            placeholder={this.props.intl.formatMessage({ id: "password"})}
                            onChange={(event) => this.inputChangedHandler(event, "password")}
                            onBlur={(event) => this.inputChangedHandler(event, "password")}
                            pattern=".{8,}"
                            required />
                    </div>
                   

                        <label htmlFor="inputPassword2" className="font-weight-bold" style={{paddingTop:'10px'}}>{this.props.intl.formatMessage({ id: "confirmPassword"})}</label>
                        <input type="password"
                            value={this.state.confirmPassword}
                            className="form-control"
                            id="inputPassword2"
                            placeholder={this.props.intl.formatMessage({ id: "confirmPassword"})}
                            onChange={(event) => this.inputChangedHandler(event, "confirmPassword")}
                            onBlur={(event) => this.inputChangedHandler(event, "confirmPassword")}
                            pattern=".{8,}"
                            required />

                    <button type="submit" className="btn btn-primary">{this.props.intl.formatMessage({ id: "submit"})}</button>
           
                </form>
            </div>
        );
    }

    renderProviderSection = () => {
        return (
            <div className="single_slider d-flex align-items-center justify-content-center" style={{ height: '30vh' }}>
                
                <div className="container row">
                <label htmlFor="providerLogin" className="font-weight-bold">{this.props.intl.formatMessage({ id: "provider-label" })}</label>
                    <button className="google btn" style={{ backgroundColor: '#dd4b39' }} onClick={() => this.props.onProviderLogin(googleAuthProvider)}>
                        <i className="fa fa-google fa-fw"></i> {this.props.intl.formatMessage({ id: "google-login" })}
                    </button>
                
                    <button className="fb btn" style={{ backgroundColor: '#3B5998' }} onClick={() => this.props.onProviderLogin(facebookAuthProvider)}>
                        <i className="fa fa-facebook fa-fw"></i> {this.props.intl.formatMessage({ id: "facebook-login" })}
                    </button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <Wrapper>
                <div className="slider_area">
                    <div className="bradcam_area slider_bg_new overlay2">

                        <h2 className="text-white">{this.props.intl.formatMessage({ id: "eduveda-welcome"})}</h2>
                        <h5 className="text-white">{this.props.intl.formatMessage({ id: "eduveda-signup-text"})}</h5>
                    </div>
                </div>
                <div className="slider_area bg-white">
                <div className="single_slider d-flex align-items-center justify-content-center" style={{ height: 'auto' }}>
                    <div className="btn-group" role="group" aria-label="Auth-Options">
                        <button 
                        type="button" 
                        className={this.state.isSignInSelected ? activeOptionClassName : "btn btn-secondary"}
                        onClick={this.onSignInSelect}>{this.props.intl.formatMessage({ id: "SignIn"})}</button>
                        <button 
                        type="button" 
                        className={this.state.isSignUpSelected ? activeOptionClassName : "btn btn-secondary"}
                        onClick={this.onSignUpSelect}>{this.props.intl.formatMessage({ id: "SignUp"})}</button>
                        <button 
                        type="button" 
                        className={this.state.isProviderLoginSelected ? activeOptionClassName : "btn btn-secondary"}
                        onClick={this.onProviderSelect}>{this.props.intl.formatMessage({ id: "provider"})}</button>
                    </div>
                    </div>
                    {!this.props.showSignUp && !this.props.showForgotPassword && !this.state.isProviderLoginSelected && this.renderSignInSection()}
                    {this.props.showSignUp && !this.state.isProviderLoginSelected && this.renderSignUpSection()}
                    {this.props.showForgotPassword && this.renderForgotPasswordSetion()}
                    {this.state.isProviderLoginSelected && this.renderProviderSection()}
                </div>
            </Wrapper>
        );
    }
}

export default injectIntl(AuthMobile);