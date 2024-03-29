import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Wrapper from '../../hoc/Wrapper';
import eduvedaLogo from "./../../img/form-logo.png";
import { googleAuthProvider, facebookAuthProvider } from "../../Firebase/authMethods";

class Authentication extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName : '',
			lastName : '',
			email : '',
			password : '',
			confirmPassword : '',
			userType : 'Student',
			gender :'Male',
			resetFields : false
		}	
	}

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props.resetFields !== prevProps.resetFields) {
		  this.setState({
			email : '',
			password : ''
		  });
		}
	  }

	  onBackToLogin = () => {
		this.props.onBackToLogin();
		this.setState({
			email : '',
			password : ''
		});	
	  }

	onSignUpLinkClick = () => {
		this.props.onSignUpLinkClick();
		this.setState({
			email : '',
			password : ''
		});	
	}

	onForgotPassword = () => {
		this.props.onForgotPassword();
		this.setState({
			email : ''
		});
	}
	
	inputChangedHandler = (event, controlName) => {
		this.setState({
			[controlName] : event.target.value
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
			phoneNumber : this.state.phoneNumber,
			passwordOne : this.state.password,
			gender : this.state.gender

		}
		this.props.eduvedaSignUpHandler(user);
	}

	submitForgotPwdRequest = (event) => {
		event.preventDefault();
		this.props.eduvedaResetPwdHandler(this.state.email);
	}

	renderSignInSection = () => {
		
		return (
			<React.Fragment>
				<h3>{this.props.intl.formatMessage({ id: "SignIn" })}</h3>
				<form onSubmit={this.submitLoginHandler}>
					<div className="row">
						<div className="col-xl-12 col-md-12">
							<input
								type="text"
								name="email"
								placeholder={this.props.intl.formatMessage({ id: "email-placeholder" })}
								onChange={(event) => this.inputChangedHandler(event, "email")}
								onBlur={(event) => this.inputChangedHandler(event, "email")}
								value={this.state.email}
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
								required
							/>
						</div>
						<div className="col-xl-12 col-md-12">
							<input
								type="password"
								name="password"
								placeholder={this.props.intl.formatMessage({ id: "pwd-placeholder" })}
								onChange={(event) => this.inputChangedHandler(event, "password")}
								onBlur={(event) => this.inputChangedHandler(event, "password")}
								value={this.state.password}
								pattern=".{8,}"
								required
							/>
							<Link to="" style={{color: 'white', float: 'left'}} onClick={this.onForgotPassword}>{this.props.intl.formatMessage({ id: "forgot-pwd" })}</Link>
						</div>
						<div className="col-xl-11 col-md-11">
							{this.props.validationError.hasLoginError ? <label style={{color: 'red',marginLeft : '5px'}}>{this.props.intl.formatMessage({ id: this.props.validationError.errorCode })}</label> : ''}
						</div>
						<div className="col-xl-12">
							<button
								type="submit"
								className="boxed_btn_orange"
							>
								{this.props.intl.formatMessage({ id: "SignIn" })}
							</button>
						</div>
					</div>
				</form>
				
				<div className="col">
						<button className="google btn" style={{backgroundColor: '#dd4b39'}} onClick={() => this.props.onProviderLogin(googleAuthProvider)}>
							<i className="fa fa-google fa-fw"></i> {this.props.intl.formatMessage({ id: "google-login" })}
        				</button>
					</div>
				<div className="col">
					<button className="fb btn" style = {{backgroundColor: '#3B5998'}}onClick={() => this.props.onProviderLogin(facebookAuthProvider)}>
						<i className="fa fa-facebook fa-fw"></i> {this.props.intl.formatMessage({ id: "facebook-login" })}
					</button>
				</div>

			</React.Fragment>

		);
	}

	renderSignUpSection = () => {
		return(
			<React.Fragment>
				<h3>{this.props.intl.formatMessage({ id: "Registration" })}</h3>
				<form onSubmit={this.submitSignUpHandler}>
                  <div className="row">
                    <div className="col-xl-12 col-md-12">
                        <input type="text" style = {{width : '47%'}} placeholder={this.props.intl.formatMessage({ id: "firstName-placeholder" })} value={this.state.firstName} onChange={( event ) => this.inputChangedHandler(event, "firstName")} required/>
						<label value="" style = {{width : '6%'}}/>
						<input type="text" style = {{width : '47%'}} placeholder={this.props.intl.formatMessage({ id: "lastName-placeholder" })} value={this.state.lastName} onChange={( event ) => this.inputChangedHandler(event, "lastName")} required/>

                    </div>
                    <div className="col-xl-12 col-md-12">
                      <input type="email" 
					  placeholder={this.props.intl.formatMessage({ id: "email-placeholder" })} 
					  value={this.state.email} 
					  onChange={( event ) => this.inputChangedHandler(event, "email")}
					  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					  required />
                    </div>
                    
                    <div className="col-xl-12 col-md-12">
                      <select id="userType" style = {{width : '30%', float : 'left', marginTop : '5px'}} value={this.state.userType} onChange={( event ) => this.inputChangedHandler(event, "userType")}>
                        <option value="Student">{this.props.intl.formatMessage({ id: "Student" })}</option>
                        <option value="Faculty">{this.props.intl.formatMessage({ id: "Faculty" })}</option>
                        <option value="Admin">{this.props.intl.formatMessage({ id: "Admin" })}</option>
                      </select>
					  <label value="" style = {{width : '5%'}}/>
					  <select id="gender" style = {{width : '26%', marginTop : '5px'}} value={this.state.gender} onChange={( event ) => this.inputChangedHandler(event, "gender")}>
                        <option value="Male">{this.props.intl.formatMessage({ id: "Male" })}</option>
                        <option value="Female">{this.props.intl.formatMessage({ id: "Female" })}</option>
						<option value="Other">{this.props.intl.formatMessage({ id: "Other" })}</option>
                      </select>
					  <label value="" style = {{width : '5%'}}/>
					  <input type="tel"style = {{width : '34%'}} id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} placeholder={this.props.intl.formatMessage({ id: "phoneNumber-placeholder" })} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={( event ) => this.inputChangedHandler(event, "phoneNumber")}/>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <input type="password" placeholder={this.props.intl.formatMessage({ id: "pwd-placeholder" })} value={this.state.password} onChange={( event ) => this.inputChangedHandler(event, "password")} required pattern=".{8,}"/>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <input type="password" placeholder={this.props.intl.formatMessage({ id: "conf-pwd-placeholder" })} value={this.state.confirmPassword} onChange={( event ) => this.inputChangedHandler(event, "confirmPassword")} required pattern=".{8,}"/>
                    </div>
					<div className="col-xl-11 col-md-11">
							{this.props.validationError.hasLoginError ? <label style={{color: 'red',marginLeft : '5px'}}>{this.props.intl.formatMessage({ id: this.props.validationError.errorCode })}</label> : ''}
						</div>
                    <div className="col-xl-12">
                      <button type="submit" className="boxed_btn_orange">
                        {this.props.intl.formatMessage({ id: "SignUp" })}
                      </button>
                    </div>
                  </div>
				</form>
			</React.Fragment>
		);
	}

	renderForgotPasswordSetion = () => {
		return(
		<React.Fragment>
			<h4 style={{color:'white'}}>{this.props.intl.formatMessage({ id: "forgot-pwd-label" })}</h4>
			<form onSubmit={this.submitForgotPwdRequest}>
				<div className="col-xl-12 col-md-12">
                      <input type="email" 
					  placeholder="Enter Email" 
					  value={this.state.email} 
					  onChange={( event ) => this.inputChangedHandler(event, "email")}
					  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					  required/>
                </div>
					<div className="col-xl-11 col-md-11">
						{this.props.validationError.hasLoginError ? <label style={{ color: 'red', marginLeft: '5px' }}>{this.props.intl.formatMessage({ id: this.props.validationError.errorCode })}</label>
							: this.props.hasSuccessMsg ? <label style={{ color: 'green', marginLeft: '5px' }}>{this.props.intl.formatMessage({ id: "reset-link-sent" })}</label> : ''}
					</div>
				<div className="col-xl-12">
                      <button type="submit" className="boxed_btn_orange">
                        {this.props.intl.formatMessage({ id: "reset-pwd" })}
                      </button>
                </div>
			</form>
		</React.Fragment>
		);
	}

	render() {
		
		return (
			<Wrapper>
				<div id="test-form" className="white-popup-block">
					<div className="signUpMain-popupbox slider_bg_new overlay2">
					<button type="button" className="close" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
						<div className="popup_inner">
							<div className="row">
								<div className="signUpMain-col">
									<div>
										<Logo altVal="eduvedaLogoHeader" logoPath={eduvedaLogo} id="logo text-center" />
										{this.props.showSignUp || this.props.showForgotPassword ? 
										(
										<React.Fragment>
											<label className="aboutEvuVeda-Text">{this.props.intl.formatMessage({ id: "eduveda-welcome" })}</label>
											<label className="aboutEvuVeda-Text">{this.props.intl.formatMessage({ id: "eduveda-signup-text" })}</label>

											<p className="doen_have_acc dont-have-acct">
												<Link
													to=""
													className="dont-hav-acc link-button"
													onClick={this.onBackToLogin}
													style={{color:"orange"}}
												>
													{this.props.intl.formatMessage({ id: "back-to-login" })}
												</Link>
											</p>
										</React.Fragment>
										) : 
										(
										<React.Fragment>
											<label className="aboutEvuVeda-Text">{this.props.intl.formatMessage({ id: "eduveda-signin-welcome-back" })}</label>
											<label className="aboutEvuVeda-Text">{this.props.intl.formatMessage({ id: "eduveda-signin-display-msg" })}</label>

											<p className="doen_have_acc dont-have-acct">
												{this.props.intl.formatMessage({ id: "DontHaveAnAcct" })}?{" "}
												<Link
													to=""
													className="dont-hav-acc link-button"
													onClick={this.onSignUpLinkClick}
													style={{color:"orange"}}
												>
													{this.props.intl.formatMessage({ id: "SignUp" })}
												</Link>
											</p>
											</React.Fragment>
										)}
									</div>
								</div>
								<div className="popup_box ">
									<div className="popup_inner">
									
										{!this.props.showSignUp && !this.props.showForgotPassword && this.renderSignInSection()}
										{this.props.showSignUp && this.renderSignUpSection()}
										{this.props.showForgotPassword && this.renderForgotPasswordSetion()}
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

export default injectIntl(Authentication);
