import React, { Component } from 'react';
import Searchbar from './searchbar';
import reDirect from '../images/re-direct.png';
import doc from '../images/doc.png';
import ModalContainer from './model';
import GetCallbackForm from './get-callback-form';
import UploadPrescription from './uploadPrescription';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {fetchDealOfTheDay} from '../actions/deal';
import { closeUpload, openUpload } from '../actions/user';

class HomeSearchBar extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    openUpload: PropTypes.func.isRequired,
    User: PropTypes.object.isRequired,
    closeUpload: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      openCallBack: false,
      openTest: false
    };
    this.openCallBack = this.openCallBack.bind(this);
    this.closeCallBack = this.closeCallBack.bind(this);
    this.closeTest = this.closeTest.bind(this);
    this.openTest = this.openTest.bind(this);
  }

  openCallBack() {
    this.setState({ // eslint-disable-line
      openCallBack: true
    });

  }

  openTest() {
    this.setState({ // eslint-disable-line
      openTest: true
    });
  }

  closeTest() {
    this.setState({ // eslint-disable-line
      openTest: false
    });
  }

  closeCallBack() {
    this.setState({ // eslint-disable-line
      openCallBack: false
    });
  }

  render() {
    return (
      <div className="bg_bennar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="heading_h1">
                <h1>India's Largest e-HealthCare Platform</h1>
                <p>Get the best health services at your doorstep.</p>
              </div>
              <Searchbar history={this.props.history} />
              <div className="row justify-content-md-center">
                <div className="col col-lg-7">
                  <div className="btn-group marginLR5" role="group" aria-label="Basic example">
                    <div className="input-group-prepend">
                      <div className="input-group-text call-back-btn gray">
                        <img src={reDirect} alt="Text" />
                      </div>
                    </div>
                    <button type="button" onClick={this.openCallBack} className="btn btn-secondary call-back-btn dark">
                      GET A CALL BACK NOW
                    </button>
                  </div>
                  <div className="btn-group marginLR5" role="group" aria-label="Basic example">
                    <div className="input-group-prepend">
                      <div className="input-group-text call-back-btn auqa">
                        <img src={doc} alt="Text" />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => this.props.openUpload()}
                      className="btn btn-secondary call-back-btn auqaLight">
                      UPLOAD TEST PRESCRIPTION
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <If condition={this.state.openCallBack}>
          <ModalContainer open={this.state.openCallBack} onCloseModal={this.closeCallBack}>
            <GetCallbackForm />
          </ModalContainer>
        </If>
        <If condition={this.props.User.openUpload}>
          <ModalContainer open={this.props.User.openUpload} onCloseModal={this.props.closeUpload}>
            <UploadPrescription onCloseModal={this.props.closeUpload} />
          </ModalContainer>
        </If>
      </div>
    );
  }

}


HomeSearchBar = connect(state => ({
  User: state.User,
}), dispatch => ({
  openUpload: () => dispatch(openUpload()),
  closeUpload: () => dispatch(closeUpload())
}))(HomeSearchBar);

export default HomeSearchBar;

