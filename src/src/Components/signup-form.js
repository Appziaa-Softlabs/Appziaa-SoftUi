import React, { Component } from 'react';
// import { Form, reduxForm, formValueSelector } from 'redux-form';
import { InputGroup, FormControl } from 'react-bootstrap';
import TermAndCondition from '../Components/term-and-condition';
import FormSidebar from '../Components/form-sidebar';
import SignupOtp from '../Components/signupotp'
// import history from '../history';
// import axios from 'axios';
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp_type: '',
      mobile: '',
      show: false,
      payload: {},
      otp_id: ''

    }
    this.handleChangeLoginType = this.handleChangeLoginType.bind(this);
    this.handleChangeMobile = this.handleChangeMobile.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  }

  handleChangeMobile(e) {

    this.setState({ mobile: e.target.value });

  }
  handleChangeLoginType(e) {

    this.setState({ otp_type: e.target.value });

  }
  submituserRegistrationForm(e) {

    e.preventDefault();
    console.log(this.state);
    // let formData = new FormData();
    // formData.append();
    console.log("inside handleGetJson");
    fetch(`https://rewardsplus.in/api/user/sendotp`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      // body: formData
      body: JSON.stringify({
        otp_type: 'registration',
        mobile: `${this.state.mobile}`,
      })
    })
      .then((response) => response.json())
      .then(data =>
        this.setState({
          show: true,
          otp_id: data.payload.otp_id

        }

        )
      )
  }

  submit(values) {
    this.props.onSubmit(values, this.props.callbackAction);
  }

  render() {
    // const data = this.state.otp_id
    // console.log('id', data)
    return (
      <div>
        {!this.state.show ? (<form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
          <div className="modal-get-callback login">
            <FormSidebar />
            <div className="linearForm text-left">
              <p className="title-desc text-left">Enter Mobile No / Email ID to get an OTP for smooth </p>
              <InputGroup className="mb-3">
                {/* <InputGroup.Prepend> */}
                {/* </InputGroup.Prepend> */}
                <FormControl
                  placeholder="Enter your Phone Number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={this.state.mobile}
                  onChange={this.handleChangeMobile}
                />
              </InputGroup>
              <div className="col">
                <div className="form_field">
                  <button type="submit" className="btn btn-default field_btn"
                  // style={{ opacity: submitting || invalid ? '0.5' : '1' }}
                  // onClick={this.onOpenModal}
                  >
                    process
                </button>
                </div>
              </div>
              <TermAndCondition customClassName="text-center note-text padding-top-50px" />
            </div>
          </div>
        </form>) : (<SignupOtp onCloseModal={this.props.onCloseModal} data={this.state.mobile} otp_id={this.state.otp_id} />
          )}
      </div>
    );
  }
}
export default SignupForm;