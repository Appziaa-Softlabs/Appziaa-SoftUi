import React from 'react';
import PropTypes from 'prop-types';
// import 'font-awesome/css/font-awesome.min.css';
import D2LNoAndEmailHeader from './d2l-no-and-email-header';
// import Logo from './logo';
// import DownloadReportButton from './download-report-button';
// import UserMenu from './user-menu';
// import HeaderMenu from './header-menu';
import '../scss/header.scss'
const Header = props => (
    <header>
        <div className="top_header">
            <D2LNoAndEmailHeader />
        </div>

    </header>
);

Header.propTypes = {
    history: PropTypes.object.isRequired
};

export default Header;
