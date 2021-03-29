import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';
import Wrapper from '../../hoc/Wrapper';


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
            isSignUpSelected : false
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

    onBackToLogin = () => {
        this.props.onBackToLogin();
        this.setState({
            email: '',
            password: ''
        });
    }

    onSignInSelect = () => {
        this.props.onBackToLogin();
        this.setState({
            email: '',
            password: '',
            isSignInSelected : true,
            isSignUpSelected : false
        });
    }

    onSignUpSelect = () => {
        this.props.onSignUpLinkClick();
        this.setState({
            email: '',
            password: '',
            isSignInSelected : false,
            isSignUpSelected : true
        });
    }


    renderForgotPasswordSetion = () => {
        return (
            <div className="single_slider d-flex align-items-center justify-content-center " style={{ height: '50vh' }}>
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
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">Email address</label>
                        <input type="email"
                            value={this.state.email}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(event) => this.inputChangedHandler(event, "email")}
                            onBlur={(event) => this.inputChangedHandler(event, "email")}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="font-weight-bold">Password</label>
                        <input type="password"
                            value={this.state.password}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(event) => this.inputChangedHandler(event, "password")}
                            onBlur={(event) => this.inputChangedHandler(event, "password")}
                            pattern=".{8,}"
                            required />
                    </div>
                    <div>
                        <label htmlFor="exampleCheck1" className="font-weight-bold"><Link onClick={this.onForgotPassword}>Forgot Password?</Link></label>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    renderSignUpSection = () => {
        return (
            <div className="single_slider d-flex align-items-center justify-content-center " style={{ height: '60vh' }}>
                
                <form style={{ width: '80%' }} onSubmit={this.submitSignUpHandler}>

                    <div className="form-group">
                        {this.props.validationError.hasLoginError ?
                            <div className="alert alert-danger" style={{marginTop:'10px', padding: '1px 8px'}}>
                                <label>{this.props.intl.formatMessage({ id: this.props.validationError.errorCode })}</label>
                            </div> : ''}
                        <label htmlFor="exampleInputEmail1" className="font-weight-bold">Email address</label>
                        <input type="email"
                            value={this.state.email}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(event) => this.inputChangedHandler(event, "email")}
                            onBlur={(event) => this.inputChangedHandler(event, "email")}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="font-weight-bold">Password</label>
                        <input type="password"
                            value={this.state.password}
                            className="form-control"
                            id="Password"
                            placeholder="Password"
                            onChange={(event) => this.inputChangedHandler(event, "password")}
                            onBlur={(event) => this.inputChangedHandler(event, "password")}
                            pattern=".{8,}"
                            required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="font-weight-bold">Confirm Password</label>
                        <input type="password"
                            value={this.state.confirmPassword}
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={(event) => this.inputChangedHandler(event, "confirmPassword")}
                            onBlur={(event) => this.inputChangedHandler(event, "confirmPassword")}
                            pattern=".{8,}"
                            required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    render() {
        return (
            <Wrapper>
                <div className="slider_area">
                    <div className="bradcam_area slider_bg_new overlay2 d-block d-lg-none">

                        <h2 className="text-white">Welcome to EduVeda!!</h2>
                        <h5 className="text-white">Please login to explore premium courses.</h5>
                    </div>
                </div>
                <div className="slider_area bg-white" >
                    <div className="btn-group" style={{marginLeft: '115px'}} role="group" aria-label="Auth-Options">
                        <button 
                        type="button" 
                        className={this.state.isSignInSelected ? activeOptionClassName : "btn btn-secondary"}
                        onClick={this.onSignInSelect}>Sign In</button>
                        <button 
                        type="button" 
                        className={this.state.isSignUpSelected ? activeOptionClassName : "btn btn-secondary"}
                        onClick={this.onSignUpSelect}>Sign Up</button>
                    </div>
                    {!this.props.showSignUp && !this.props.showForgotPassword && this.renderSignInSection()}
                    {this.props.showSignUp && this.renderSignUpSection()}
                    {this.props.showForgotPassword && this.renderForgotPasswordSetion()}
                </div>
            </Wrapper>
        );
    }
}

export default injectIntl(AuthMobile);