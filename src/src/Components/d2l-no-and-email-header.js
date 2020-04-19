import React from 'react';
// import phoneIcon from '../images/phone_icon.png';
import '../scss/style.css'
const email = 'info@direct2lab.com';
const mobile = '011- 23546413';

const D2LNoAndEmailHeader = () => (
  <div>
    <div className="col-md-12 col-sm-12 col-xs-12"> */}
     <ul className="stick_menu">
        <li>
          <i className="mail_icon fa fa-phone"
          // aria-hidden="true" 
          />
          Call us&nbsp;
           <a style={{ fontSize: '13px' }} href={`tel:${mobile}`}>{mobile}</a>
        </li>
        <li>
          <i className="fa fa-envelope mail_icon" aria-hidden="true" />Email us&nbsp;
           <a href={`mailto:${email}`}>{email}</a>
        </li>

      </ul>
    </div>

  </div>
);

export default D2LNoAndEmailHeader;
