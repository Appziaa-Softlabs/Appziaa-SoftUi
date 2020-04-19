import React from 'react';
import telescope from '../images/telescope.png';

const FormSidebar = () => (
  <div className="linearGradient text-center">
    <div className="position-top-80">
      <img src={telescope} alt="" />
      <h5>India's best lab test platform</h5>
      <p>Get the best lab test services at your doorstep.</p>
      <a className="field_btn-white">Know more</a>
    </div>
  </div>
);

export default FormSidebar;
