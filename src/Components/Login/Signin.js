import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import eduvedaLogo from "./../../img/form-logo.png";
import * as actions from '../../store/actions/index';

class SignIn extends Component {
  state = {
      controls : {
        email: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
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
        this.props.onAuth( null,null,null,this.state.controls.email.value, this.state.controls.password.value, false);
    }

  render() {
    return (
      <Wrapper>
          <div id="test-form" className="white-popup-block">
              <div className="popup_box ">
                  <div className="popup_inner">
                      <Logo altVal="eduvedaLogoHeader" logoPath={eduvedaLogo} id="logo text-center"/>
                      <h3>{this.props.intl.formatMessage({ id: "SignIn" })}</h3>
                      <form onSubmit={this.submitHandler}>
                          <div className="row">
                              <div className="col-xl-12 col-md-12">
                              <input
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                onChange={( event ) => this.inputChangedHandler(event, "email")}
                                onBlur={( event ) => this.inputChangedHandler(event, "email")}
                                value={this.state.email}
                              />
                              </div>
                              <div className="col-xl-12 col-md-12">
                              <input
                                type="text"
                                name="password"
                                placeholder="Password"
                                onChange={( event ) => this.inputChangedHandler(event, "password")}
                                onBlur={( event ) => this.inputChangedHandler(event, "password")}
                                value={this.state.password}
                              />
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
                      <p className="doen_have_acc">
                        {this.props.intl.formatMessage({ id: "DontHaveAnAcct" })}?{" "}
                        <Link
                          to=""
                          className="dont-hav-acc link-button"
                          onClick={this.props.onLoginBtnClick}
                        >
                          {this.props.intl.formatMessage({ id: "SignUp" })}
                        </Link>
                      </p>
                  </div>
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
        onAuth: ( fullName,phoneNumber, userType, email, password, isSignup ) => dispatch( actions.auth( fullName,phoneNumber, userType, email, password, isSignup ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(injectIntl(SignIn));
