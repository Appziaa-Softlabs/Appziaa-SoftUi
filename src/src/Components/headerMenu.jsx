import React from 'react';
import DownloadReportButton from './download-report-button';
import UserMenu from './user-menu';
// import HeaderMenu from './header-menu';
import Header from './header'
import '../scss/header.scss'
const HeaderMenu = props => (
    <header>
        <div>
            <Header>

            </Header>
            <div className="middle_header">
                <ul className="stick_menu stickMenu">
                    <li>
                        <DownloadReportButton />
                    </li>
                    <li>
                        <UserMenu />
                    </li>
                </ul>
            </div>

            {/* <HeaderMenu history={props.history} /> */}
        </div>
    </header>
);
export default HeaderMenu;
