import React, { Component } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import TermAndCondition from '../Components/term-and-condition';
import FormSidebar from '../Components/form-sidebar'
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            show: false

        }
        this.handleChangeMobile = this.handleChangeMobile.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        this.onCloseSubmit = this.onCloseSubmit.bind(this);
    }

    handleChangeMobile(e) {

        this.setState({ email: e.target.value });

    }
    handleChangePassword(e) {

        this.setState({ password: e.target.value });

    }
    submituserRegistrationForm(e) {

        e.preventDefault();
        // console.log(this.state);
        // let formData = new FormData();
        // formData.append();
        // console.log("inside handleGetJson");
        fetch(`https://rewardsplus.in/api/user/login`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            // body: formData
            body: JSON.stringify({
                mobile: `${this.state.email}`,
                password: `${this.state.password}`,
            })
        })
            .then((response) => response.json())
            .then((data) =>
                // console.log(JSON.stringify(data))
                this.setState({
                    show: true
                })
            )
    }
    onCloseSubmit() {
        this.props.onCloseModal()


    }
    render() {
        return (
            <div>
                <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                    <div className="modal-get-callback login">
                        <FormSidebar />
                        <div className="linearForm text-left">
                            <p className="title-desc text-left">Enter Mobile No / Email ID to get an OTP for smooth </p>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Enter your number"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={this.state.value}
                                    onChange={this.handleChangeMobile}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Enter your password"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={this.state.value}
                                    onChange={this.handleChangePassword}
                                />
                            </InputGroup>
                            <div className="col">
                                <div className="form_field">
                                    <button type="submit" className="btn btn-default field_btn"
                                        // style={{ opacity: submitting || invalid ? '0.5' : '1' }}
                                        onClick={this.onCloseSubmit}
                                    >
                                        login
                    </button>
                                </div>
                            </div>
                            <TermAndCondition customClassName="text-center note-text padding-top-50px" />
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}
export default LoginForm;