import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from './../Logo/Logo';
import Wrapper from './../../hoc/Wrapper';
import eduvedaLogo from "./../../img/form-logo.png";
import * as actions from '../../store/actions/index';


class SignUpMain extends Component {

  render() {
    return (
      <Wrapper>
        <div className="mfp-container mfp-inline-holder">
          <div className="mfp-content">
            <form id="test-form2" className="white-popup-block" onSubmit={this.submitHandler}>
              <div className="signUpMain-popupbox ">
                <div className="popup_inner">
                  <div className="row">
                    <div className="signUpMain-col">
                      <div>
                        <Logo altVal="eduvedaLogoHeader" logoPath={eduvedaLogo} id="logo text-center"/>
                        <h3>{this.props.intl.formatMessage({ id: "Registration" })}</h3>
                      </div>
                    </div>

                    <div className="col">
                      <h4>Join EduVeda as a</h4>
                      <div className="popup_box" style={{padding:"0 0"}}>
                        <div className="popup_inner">
                          <div className="col-xl-12 col-md-12">
                            <div className="input-group login-methods">
                              <div id="radioBtn" className="btn-group">
                                <a className="btn btn-primary btn-sm active" data-toggle="fun" data-title="Y">Email/Password</a>
                                          <a className="btn btn-primary btn-sm notActive" data-toggle="fun" data-title="X">Phone Number</a>
                                <a className="btn btn-primary btn-sm notActive" data-toggle="fun" data-title="N">Social Platforms</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12 col-md-12">
                          </div>
                        </div>
                      </div>
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
        //onAuth: ( fullName,phoneNumber, userType, email, password, isSignup ) => dispatch( actions.auth( fullName,phoneNumber, userType, email, password, isSignup ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(injectIntl(SignUpMain));
