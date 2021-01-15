import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { connect } from 'react-redux';
//import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
//import eduvedaLogo from "./../../img/form-logo.png";
import * as actions from '../../store/actions/index';

class SignUp extends Component {
  state = {
      controls : {
        fullName: {
          value: '',
          validation: {
              required: true,
              isEmail: true
          },
          valid: false,
          touched: false
        },
        email: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            phoneNumber: {
              value: '',
              validation: {
                  required: true,
                  isEmail: true
              },
              valid: false,
              touched: false
            },
            userType: {
                value: 'student',
                validation: {},
                valid: false,
                touched: false
            },
            password: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                value: '',
                validation: {
                    required: true,
                    isSameAsPassword:true
                },
                valid: false,
                touched: false
            }
        },
      }

  checkValidity ( value, rules ) {
          let isValid = true;
          if ( !rules ) {
              return true;
          }

          if ( rules.required ) {
              isValid = value.trim() !== '' && isValid;
          }

          if ( rules.minLength ) {
              isValid = value.length >= rules.minLength && isValid
          }

          if ( rules.maxLength ) {
              isValid = value.length <= rules.maxLength && isValid
          }

          if ( rules.isEmail ) {
              const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
              isValid = pattern.test( value ) && isValid
          }

          if ( rules.isNumeric ) {
              const pattern = /^\d+$/;
              isValid = pattern.test( value ) && isValid
          }

          return isValid;
  }

  inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
  }

  submitHandler = ( event ) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        this.props.onAuth(this.state.controls.fullName.value,this.state.controls.phoneNumber.value, this.state.controls.userType.value, this.state.controls.email.value, this.state.controls.password.value);
    }

  render() {
    return (
      <Wrapper>
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content">
            <form id="test-form2" className="white-popup-block" onSubmit={this.submitHandler}>
              <div className="popup_box ">
                <div className="popup_inner">
                      {/*<Logo altVal="eduvedaLogoHeader" logoPath={eduvedaLogo} id="logo text-center"/>*/}
                  <h3>{this.props.intl.formatMessage({ id: "Registration" })}</h3>
                  <div className="row">
                    <div className="col-xl-12 col-md-12">
                        <input type="text" placeholder="Enter Full Name" value={this.state.fullName} onChange={( event ) => this.inputChangedHandler(event, "fullName")}/>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <input type="email" placeholder="Enter Email" value={this.state.email} onChange={( event ) => this.inputChangedHandler(event, "email")}/>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <input type="number" placeholder="Enter Phone Number" value={this.state.phoneNumber} onChange={( event ) => this.inputChangedHandler(event, "phoneNumber")}/>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <select id="userType" value={this.state.userType} onChange={( event ) => this.inputChangedHandler(event, "userType")}>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <input type="password" placeholder="Password" value={this.state.password} onChange={( event ) => this.inputChangedHandler(event, "password")}/>
                    </div>
                    <div className="col-xl-12 col-md-12">
                      <input type="password" placeholder="Confirm password" value={this.state.confirmPassword} onChange={( event ) => this.inputChangedHandler(event, "confirmPassword")}/>
                    </div>
                    <div className="col-xl-12">
                      <button type="submit" className="boxed_btn_orange">
                        {this.props.intl.formatMessage({ id: "SignUp" })}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        localId: state.auth.localId,
        loading: state.auth.loading,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( fullName,phoneNumber, userType, email, password ) => dispatch( actions.eduvedaSignUp( fullName,phoneNumber, userType, email, password ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(injectIntl(SignUp));
