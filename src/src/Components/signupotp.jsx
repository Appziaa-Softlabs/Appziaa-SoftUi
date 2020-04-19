import React, { Component } from 'react';
import { InputGroup, FormControl, } from 'react-bootstrap';
import TermAndCondition from '../Components/term-and-condition';
import FormSidebar from '../Components/form-sidebar';
import '../scss/signup.scss'
class SignupOtp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp_id: '',
            otp: '',
            otp_type: '',
            name: '',
            email: '',
            mobile: '',
            password: '',

            message: ''

        }
        // this.handleChangeLoginType = this.handleChangeLoginType.bind(this);
        // this.handleChangeMobile = this.handleChangeMobile.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeOtp = this.handleChangeOtp.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    }

    componentDidMount() {
        let mobile = String(this.props.data)
        let otp_id = (this.props.otp_id)
        this.setState({
            mobile: mobile,
            otp_id: otp_id
        })
    }
    handleChangeEmail(e) {

        this.setState({ email: e.target.value });

    }
    handleChangePassword(e) {

        this.setState({ password: e.target.value });

    }
    handleChangeOtp(e) {

        this.setState({ otp: e.target.value });

    }
    handleChangeName(e) {

        this.setState({ name: e.target.value });

    }
    submituserRegistrationForm(e) {

        e.preventDefault();
        // console.log(this.state);
        // let mobile = String(this.props.data)
        // let otp_id = (this.props.otp_id)
        // this.setState({
        //     mobile: mobile,
        //     otp_id: otp_id
        // })
        // let formData = new FormData();
        // formData.append();
        console.log("inside handleGetJson");
        fetch(`https://rewardsplus.in/api/user/verifyotp`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            // body: formData
            body: JSON.stringify({
                // otp_type: 'login',
                // mobile: `${this.state.mobile}`,
                otp_id: `${this.state.otp_id}`,
                otp: `${this.state.otp}`,
                otp_type: 'registration',
                name: `${this.state.name}`,
                email: `${this.state.email}`,
                mobile: `${this.state.mobile}`,
                password: `${this.state.password}`,

            })
        })
            .then((response) => response.json())
            .then((data) =>
                console.log(JSON.stringify(data))
            )
    }
    onSignUpSubmit() {
        this.props.onCloseModal()

    }
    validateForm() {

        let errors = {};

        let formIsValid = true;

        if (!this.state.name) {

            formIsValid = false;

            errors["username"] = "*Please enter your username.";

        }

        if (typeof this.state.name !== "undefined") {

            if (!this.state.name.match(/^[a-zA-Z ]*$/)) {

                formIsValid = false;

                errors["username"] = "*Please enter alphabet characters only.";

            }

        }

        if (!this.state.email) {

            formIsValid = false;

            errors["email"] = "*Please enter your email-ID.";

        }

        if (typeof this.state.email !== "undefined") {

            //regular expression for email validation

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(this.state.email)) {

                formIsValid = false;

                errors["email"] = "*Please enter valid email-ID.";

            }

        }

        if (!this.state.mobile) {

            formIsValid = false;

            errors["mobileno"] = "*Please enter your mobile no.";

        }

        if (typeof this.state.mobile !== "undefined") {

            if (!this.state.mobile.match(/^[0-9]{10}$/)) {

                formIsValid = false;

                errors["mobileno"] = "*Please enter valid mobile no.";

            }

        }

        if (!this.state.password) {

            formIsValid = false;

            errors["password"] = "*Please enter your password.";

        }

        if (typeof this.state.password !== "undefined") {

            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {

                formIsValid = false;

                errors["password"] = "*Please enter secure and strong password.";

            }

        }

        this.setState({

            errors: errors

        });

        return formIsValid;

    }

    render() {
        const datam = this.state.mobile
        console.log(datam)
        return (
            < div >
                <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
                    <div className="modal-get-callback login">
                        <FormSidebar />
                        <div className="linearForm text-left">
                            <div className="title-modal">Sign Up</div>
                            <p className="title-desc text-left">Enter Mobile No / Email ID to get an OTP for smooth login</p>
                            {/* <input type="text" id="signup-form-mobile" name="username" placeholder="Enter Mobile Number" */}
                            {/* iconClassName="fa fa-mobile formIcons" value={this.state.mobile} /> */}
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
                            <InputGroup className="mb-3">
                                {/* <InputGroup.Prepend> */}
                                {/* </InputGroup.Prepend> */}
                                <FormControl
                                    placeholder="Enter your Name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={this.state.value}
                                    onChange={this.handleChangeName} />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                {/* <InputGroup.Prepend> */}
                                {/* </InputGroup.Prepend> */}
                                <FormControl
                                    placeholder="Enter your Email"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={this.state.value}
                                    onChange={this.handleChangeEmail}

                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                {/* <InputGroup.Prepend> */}
                                {/* </InputGroup.Prepend> */}
                                <FormControl
                                    placeholder="Enter your Otp"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={this.state.value}
                                    onChange={this.handleChangeOtp}

                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                {/* <InputGroup.Prepend> */}
                                {/* </InputGroup.Prepend> */}
                                <FormControl
                                    placeholder="Enter your Password"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={this.state.value}
                                    onChange={this.handleChangePassword}

                                />
                            </InputGroup>

                            <div className="form_field">
                                <button type="submit" className="btn btn-default field_btn"
                                    // style={{ opacity: submitting || invalid ? '0.5' : '1' }}
                                    onClick={this.onSignUpSubmit}
                                >
                                    SignUp
                                </button>

                            </div>
                            <TermAndCondition customClassName="text-center note-text" />
                        </div>
                    </div>
                </form>
            </div >

        )
    }
}
export default SignupOtp;