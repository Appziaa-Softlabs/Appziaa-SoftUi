import React, { Component } from 'react';
import '../scss/homepage.scss';

// import history from '../history';
import Header from './header';
class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: '',
            pincode: '',
            filteredData: '',
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinate = this.getCoordinate.bind(this);
        this.reversegeocodeCoordinate = this.reversegeocodeCoordinate.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinate, this.handleLocationError);
        } else {
            alert("geoloaction is not supported by this browser");
        }
    }
    getCoordinate(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({
            latitude: position.coords.latitude,

            longitude: position.coords.longitude
        }, function () { this.reversegeocodeCoordinate() }
        )

    }
    reversegeocodeCoordinate() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyDpdF27ZiuKLmsJXNfLyRbD-7nmlMa4tJw&callback=initMap`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    userAddress: data.results[0].formatted_address,

                    pincode: data.results[0].address_components[5].long_name,

                }, function () { localStorage.setItem("pincode", `${data.results[0].address_components[5].long_name}`) }

                )
            )
            .catch(error => alert(error));
    }
    handleLocationError() {
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.")
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.")
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.")
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.")
                    break;
            }
        }

    }

    render() {
        // const pin = this.state.pincode;
        // console.log('pin' + pin);

        return (
            <div class="" >
                <div className="">
                    {/* <div className="row"> */}
                    <Header></Header>

                </div>
                <div className="heading_h1">
                    <h1>Please Provide your loaction to search shop , Produts near You</h1>
                </div>
                <div class="row container-fluid">
                    <div class="col-md-5 offset-md-4">
                        <div className="col-md-6">
                            <div class="input-group">
                                <input type="text" class="form-control " value={this.state.pincode} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-success" type="button" onClick={() => this.props.history.push('/StoreListing')}
                                    >Enter</button>
                                </div>
                            </div>
                            <div>
                                <p className="text-center" style={{ fontSize: 30 }}>-------or-------</p>
                            </div>
                            <div class="border border-light text-center">

                                <div class="text-center ">
                                    <button type="button" class="btn btn-danger" onClick={this.getLocation}>Fetch current location</button>
                                </div>
                            </div>
                            <br />
                            <div className="addres_p">
                                <p className="">Address:{this.state.userAddress}</p>
                            </div>
                        </div>

                    </div>

                </div>
                {/* <div className="body_content">
                    <div className="heading_h1">
                        <h1>Please Provide your loaction to search shop , Produts near You</h1>
                    </div>
                    <div className=" mb-3 col-md-5 center ">
                        <div class="input-group col-md-10 ">
                            <input type="text" class="form-control " value={this.state.pincode} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-success" type="button" onClick={() => this.props.history.push('/StoreListing')}
                                >Enter</button>
                            </div>
                        </div>
                        <div class="border border-light ">

                            <div class="text-center col-md-10">
                                <button type="button" class="btn btn-danger" onClick={this.getLocation}>Fetch current location</button>
                            </div>
                        </div>
                        <div className="addres_p">
                            <p className="">Address:{this.state.userAddress}</p>
                        </div>
                    </div>
                </div>
                {/* <div class="container"> */}
                {/* 
                {/* <div className="">
                    <div className=" mb-3 ">
                        <div class="input-group  ">
                            <input type="text" class="form-control " value={this.state.pincode} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-success" type="button" onClick={() => this.props.history.push('/StoreListing')}
                                >Enter</button>
                            </div>
                        </div>
                    </div>
                    <div class="border border-light ">
                        <p>heelellllell</p>
                        <div class="text-center">
                            <button type="button" class="btn btn-danger" onClick={this.getLocation}>Fetch current location</button>
                        </div>
                    </div>
                    <div className="addres_p">
                        <p className="">Address:{this.state.userAddress}</p>
                    </div>
                </div>
            </div>  */}
            </div >

        );
    }
}
export default HomePage;