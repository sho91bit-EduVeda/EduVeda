import React, { Component } from "react";
import { injectIntl } from "react-intl";
import AdminServies from './../../Services/AdminServices';
import Wrapper from '../../hoc/Wrapper';

import './../../Style/eduveda.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  float : 'left',
  marginTop: "10px",
  maxWidth: "1110px",
  height: "550px",
  overflowX: "hidden",
  overflowY: "hidden"
};

const containerStyle = {
  maxWidth: "1110px",
  height: "550px"
};

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      websiteName : '',
      websiteHeadOfficeAddress1 : '',
      websiteHeadOfficeAddress2 : '',
      websiteContactNo : '',
      websiteSupportEmail:'',
      websiteOfficeTiming : '',
      contactFormQuery : '',
      contactFormUserFullName : '',
      contactFormUserEmail : '',
      contactFormSubject: '',
      contactFormSubmitSuccessFlag : false,
      contactFormSubmitErrorFlag : false
    }
  }

  componentDidMount () {
    AdminServies.fetchWebsiteInfo().then(websiteInfo => {
      this.setState({
        websiteName : websiteInfo.name,
        websiteHeadOfficeAddress1 : websiteInfo.address1,
        websiteHeadOfficeAddress2 : websiteInfo.address2,
        websiteContactNo : websiteInfo.contactNumber,
        websiteSupportEmail: websiteInfo.supportEmail,
        websiteOfficeTiming : websiteInfo.officeTiming
      });
    }).catch(error => {
      console.log("Error fetching the Website details"+error);
    });
  }

  submitContactFormHandler = (event) => {
    event.preventDefault();
    const formData = {
      contactFormQuery : this.state.contactFormQuery,
      contactFormSubject : this.state.contactFormSubject,
      contactFormUserEmail : this.state.contactFormUserEmail,
      contactFormUserFullName : this.state.contactFormUserFullName
    };
    AdminServies.submitQueriesToEduveda(this.props.userUid, formData).then(response => {
      this.setState({
        contactFormQuery : '',
        contactFormUserFullName : '',
        contactFormUserEmail : '',
        contactFormSubject: '',
        contactFormSubmitSuccessFlag : true,
        contactFormSubmitErrorFlag : false
      });
    }).catch(error => {
      this.setState({
        contactFormSubmitSuccessFlag : false,
        contactFormSubmitErrorFlag : true
      });
    });
  }

  inputChangedHandler = (event, controlName) => {
		this.setState({
			[controlName] : event.target.value
		});
	}

  render() {
    return (
      <Wrapper>
        <div className="slider_area">
          <div className="bradcam_area contactUs_bg overlay2 d-none d-lg-block">
          </div>
          <div className="bradcam_area slider_bg_new overlay2 d-block d-lg-none">
            <h1 className="text-white">Contact Us</h1>
          </div>
        </div>

        <div className="slider_area bg-white">
          <div className="single_slider d-flex align-items-center justify-content-center ">
            <Map
              google={this.props.google}
              zoom={4}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176 }}
              containerStyle={containerStyle}
            >
              <Marker position={{ lat: 48.00, lng: -122.00 }} />

            </Map>
            </div>
        </div>

        <div className="bg-white">
          <div className="container ">
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" 
                onSubmit={this.submitContactFormHandler}
                method="post" id="contactForm" 
                noValidate="novalidate">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea className="form-control w-100" 
                        name="contactFormQuery" id="contactFormQuery" 
                        cols="30" rows="9" placeholder=" Please enter your message"
                        style={{border: '1px solid #04D2C8'}}
                        value={this.state.contactFormQuery}
                        onChange = {(event) => this.inputChangedHandler(event, "contactFormQuery")} 
                        required/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" 
                        name="contactFormUserFullName" id="contactFormUserFullName" 
                        type="text" placeholder="Enter your name"
                        value={this.state.contactFormUserFullName}
                        style={{border: '1px solid #04D2C8'}}
                        onChange = {(event) => this.inputChangedHandler(event, "contactFormUserFullName")} 
                        required/> 
                      </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input className="form-control valid" 
                          name="contactFormUserEmail" id="contactFormUserEmail" 
                          type="email" placeholder="Email"
                          value={this.state.contactFormUserEmail}
                          style={{border: '1px solid #04D2C8'}}
                          onChange = {(event) => this.inputChangedHandler(event, "contactFormUserEmail")} 
                          required/> 
                        </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input className="form-control" 
                            name="contactFormSubject" id="contactFormSubject" 
                            type="text" placeholder="Enter Subject"
                            style={{border: '1px solid #04D2C8'}}
                            value={this.state.contactFormSubject}
                            onChange = {(event) => this.inputChangedHandler(event, "contactFormSubject")} 
                            required/> 
                          </div>
                          </div>
                        </div>
                        {this.state.contactFormSubmitSuccessFlag && !this.state.contactFormSubmitErrorFlag ? 
                        <label style={{color: 'green'}}>Thanks for sending us the query. We will gent back you as soon as possible.</label> 
                        : ''}
                        {!this.state.contactFormSubmitSuccessFlag && this.state.contactFormSubmitErrorFlag ? <label style={{color:'red'}}>Something went wrong!! Please resubmit the form.</label> : ''}
                        <div className="form-group mt-3">
                          <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                        </div>
                    </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                      <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-home"></i></span>
                        <div className="media-body">
                          <h3>{this.state.websiteHeadOfficeAddress1}</h3>
                          <p>{this.state.websiteHeadOfficeAddress2}</p>
                        </div>
                      </div>
                      <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                        <div className="media-body">
                          <h3>{this.state.websiteContactNo}</h3>
                          <p>{this.state.websiteOfficeTiming}</p>
                        </div>
                      </div>
                      <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-email"></i></span>
                        <div className="media-body">
                          <h3>{this.state.websiteSupportEmail}</h3>
                          <p>Send us your query anytime!</p>
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

export default GoogleApiWrapper({
              apiKey: 'AIzaSyDOsdMmt4zROa9aIJeyY2eiKGl4ypXkDoo'
})(injectIntl(ContactUs));
