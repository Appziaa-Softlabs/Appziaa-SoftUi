import React, { Component } from 'react';
import './homepage.scss';
import { Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap';
class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: '',
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
                    userAddress: data.results[0].formatted_address

                    // address_components[5].long_name
                })
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

        return (
            <div className='homepage'>
                <h1>Please Provide your loaction to search shop , Produts near You</h1>
                <Container fluid="md">

                    <Row>
                        <div className="inpugroup">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter Your Pincode"
                                    // aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />

                            </InputGroup>
                            <div style={{ fontSize: 30 }} >
                                <p >or</p>
                            </div>
                            <Button className="Icon" onClick={this.getLocation}> Fetch current location
                            <i class="fas fa-location"></i></Button>

                            {/* <p>latitude : {this.state.latitude}</p>
                            <p> longitude:{this.state.longitude}</p> */}
                            <p>Address:{this.state.userAddress}</p>
                        </div>
                        {/* <div>
                            <button onClick={this.getLocation}></button>
                            <p>latitude:{this.state.latitude}</p>
                            <p>longitude:{this.state.langitude}</p>
                        </div> */}
                    </Row>
                </Container >
            </div >
        );
    }
}
export default HomePage;