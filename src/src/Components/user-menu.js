import React, { Component, Fragment } from 'react';
// import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// import UserMenu from '../Components copy/user-menu';
import Model from '../Components/model';
import { Button } from 'react-bootstrap';

import SignupForm from '../Components/signup-form'
// import SignupOtp from '../Components/signupotp';
import LoginForm from '../Components/login-form';
const styles = {
  base: {
    fontSize: '10px',
    position: 'relative',
    display: 'flex',
  },
  avtar: {
    fontSize: '17px',
  }
};
class UserMenu extends React.Component {

  state = {
    open: false,
    sinup: false,
    signupotp: false
  };
  onOpenSignupOtp = () => {
    this.setState({ signupotp: true });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onOpenSinup = () => {
    this.setState({ sinup: true });
  };
  // openSinup = () => {
  //   this.setState({ sinup: true });
  // }
  onCloseSignupOtp = () => {
    this.setState({ signupotp: false })
  }
  onCloseModal = () => {
    this.setState({ open: false });
    console.log('sss')
  };
  onCloseSinup = () => {
    this.setState({ sinup: false });
  };

  render() {
    const { open, sinup, } = this.state;
    console.log(open, sinup)
    return (
      <div style={{ backgroundColor: '#1f2b38' }} className="login login_email text-white float-left " style={styles.base} >

        <a onClick={this.onOpenModal} className="pointer" >login</a>
        <a onClick={this.onOpenSinup}>SignUp</a>
        {/* <Button onClick={this.onOpenSignupOtp}>Signuotp</Button> */}
        <Modal open={open} onClose={this.onCloseModal}>
          <LoginForm onCloseModal={this.onCloseModal} />
        </Modal>
        <Modal open={sinup} onClose={this.onCloseSinup} className="modal">
          <SignupForm onCloseModal={this.onCloseSinup} />
        </Modal>
        {/* <Modal open={signupotp} onClose={this.onCloseSignupOtp} className="modal">

          <SignupOtp />

        </Modal> */}

      </div >
    );
  }
}
export default UserMenu;