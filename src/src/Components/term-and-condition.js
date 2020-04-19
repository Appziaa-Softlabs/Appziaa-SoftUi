import React from 'react';
import PropTypes from 'prop-types';

const TermAndCondition = props => (
  <div className={props.customClassName}>
    By continuing, you agree to our <a href="https://direct2lab.in/privacy/">Privacy Policy</a> and <a href="https://direct2lab.in/terms-of-services/">T&C</a>
  </div>
);

TermAndCondition.propTypes = {
  customClassName: PropTypes.string.isRequired,
};

export default TermAndCondition;
