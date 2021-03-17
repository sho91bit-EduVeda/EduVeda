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
            updateProfileFlag: false
        }
    }

    inputChangedHandler = (event, controlName) => {
		this.setState({
			[controlName] : event.target.value
		});
	}

    editProfile = () => {
        this.setState({
            fullName: this.props.loggedInUser.fullName,
            gender: this.props.loggedInUser.gender,
            email: this.props.loggedInUser.email,
            phoneNumber: this.props.loggedInUser.phoneNumber,
            mobileNumber: this.props.loggedInUser.mobileNumber,
            address : this.props.loggedInUser.address,
            updateProfileFlag : true
        });
    }

    cancelProfileEdit = () => {
        this.setState({
            updateProfileFlag : false,
            fullName: this.props.loggedInUser.fullName,
            email: this.props.loggedInUser.email,
            gender: this.props.loggedInUser.gender,
            phoneNumber: this.props.loggedInUser.phoneNumber,
            mobileNumber: this.props.loggedInUser.mobileNumber,
            address : this.props.loggedInUser.address
        });
    }

    onUpdateProfile = () => {
        this.props.onUpdateProfile(this.props.loggedInUserUid, this.state.fullName,this.state.email, this.state.phoneNumber,this.state.mobileNumber,this.state.address, this.state.gender);
        this.setState({
            updateProfileFlag : false
        });
    }

    render() {
        return (
            <Wrapper>
                <div className="slider_area">
                    <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                        <div className="container" style={{ marginTop: '30px' }}>
                            <div className="main-body">

                                <nav aria-label="breadcrumb" className="main-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">{this.props.intl.formatMessage({ id: "home" })}</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                                    </ol>
                                </nav>

                                <div className="row gutters-sm">
                                    <div className="col-md-4 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex flex-column align-items-center text-center">
                                                    <img src={this.props.loggedInUser.photoURL ? this.props.loggedInUser.photoURL : "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle" width="150" />
                                                    <div className="mt-3">
                                                        <h4>{this.props.loggedInUser.fullName}</h4>
                                                        <p className="text-secondary mb-1">{this.props.loggedInUser.roles}</p>
                                                        <p className="text-muted font-size-sm">{this.props.loggedInUser.address}</p>
                                                        {/* <button className="btn btn-primary">Follow</button>
                                                        <button className="btn btn-outline-primary">Message</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3">
                                            <ul className="list-group list-group-flush">
                                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                                    <span class="text-secondary">@{this.props.loggedInUser.fullName}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
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
                                                        <h6 className="mb-0">{this.props.intl.formatMessage({ id: "fullName" })}</h6>
                                                    </div>
                                                    <div className="col-sm-9">
                                                    {this.state.updateProfileFlag ? 
                                                        <input id='fullName' type='text' style={{padding:'0'}} 
                                                                value={this.state.fullName}
                                                                onChange = {(event) => this.inputChangedHandler(event, "fullName")} /> 
                                                        : this.props.loggedInUser.fullName}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">{this.props.intl.formatMessage({ id: "Gender" })}</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                    {this.state.updateProfileFlag ? 
                                                    <select id="gender" style = {{ border:'none'}} value={this.state.gender} onChange={( event ) => this.inputChangedHandler(event, "gender")}>
                                                        <option value="Male">{this.props.intl.formatMessage({ id: "Male" })}</option>
                                                        <option value="Female">{this.props.intl.formatMessage({ id: "Female" })}</option>
                                                    </select>
                                                   : this.props.loggedInUser.gender}
                                                    
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Email</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                    {this.props.loggedInUser.email}
                                                    
                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Phone</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                    {this.state.updateProfileFlag ? 
                                                    <input type="tel" style = {{width : '34%',padding: '0', border: 'none'}} id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={( event ) => this.inputChangedHandler(event, "phoneNumber")}/> 
                                                    : this.props.loggedInUser.phoneNumber}     
                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Mobile</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                    {this.state.updateProfileFlag ? 
                                                    <input type="tel" style = {{width : '34%',padding: '0', border: 'none'}} id="mobileNumber" name="mobileNumber" value={this.state.mobileNumber} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={( event ) => this.inputChangedHandler(event, "mobileNumber")}/> 
                                                    : this.props.loggedInUser.mobileNumber}     
                                                        
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Address</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                    {this.state.updateProfileFlag ? 
                                                        <input id='address' type='text' style={{padding:'0'}} 
                                                                value={this.state.address}
                                                                onChange = {(event) => this.inputChangedHandler(event, "address")} /> 
                                                        : this.props.loggedInUser.address}
                                                        
                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row">
                                                <button className="btn btn-primary" style={{width: '20%', float: 'left', marginLeft: '15%',backgroundColor: 'Orange'}} onClick={this.editProfile}>Edit Profile</button>
                                                <button className="btn btn-primary" style={{width: '20%', marginLeft: '5%', backgroundColor: 'Green'}} onClick={this.onUpdateProfile}>Submit</button>
                                                <button className="btn btn-primary" style={{width: '20%', marginLeft: '5%', backgroundColor: 'Red'}} onClick={this.cancelProfileEdit} disabled={!this.state.updateProfileFlag}>Cancel</button>
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