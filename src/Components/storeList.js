import React, { Component } from 'react';
class StoreListing extends Component {
    constructor() {
        super()
        this.state = {
            pincode: '',
        }
    }
    componentDidMount() {
        let pincode = localStorage.getItem('pincode');
        this.getStoreList(110016);
    }
    getStoreList(pincode) {
        let formData = new FormData();
        formData.append('pincode', pincode);
        fetch("https://rewardsplus.in/api/store/storeListing", {
            method: 'post',
            body: formData
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log('Data', JSON.stringify(data));
        });
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        );
    }
}
export default StoreListing;