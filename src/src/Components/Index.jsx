import React, { Component } from 'react';
// import '../scss/homepage.scss';
import '../scss/style.css'
import Searchbar from '../Components/searchbar';

// import history from '../history';
import HeaderMenu from './headerMenu';
class Index extends Component {
    render() {
        return (
            <div className="">
                <HeaderMenu />
                <div>
                    <div class="">
                        <Searchbar />
                    </div>
                </div >
            </div>
        );
    }
}
export default Index;