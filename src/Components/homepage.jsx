import React, { Component } from 'react';
import './homepage.scss';
import { Container, Row, InputGroup, FormControl, Button, Navbar, Nav, Form } from 'react-bootstrap';
// import { withRouter } from 'react-router-dom';
import history from '../history';
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
    // handleInputChange = (event) => {
    //     const pincode = event.target.value;
    //     this.setState(prevState => {
    //         const filterData = prevState.data.filter(element => {
    //             return element.name.toLowerCase().includes(pincode.toLowerCase());
    //         });
    //         return {
    //             pincode,
    //             filterData
    //         };
    //     });
    // };
    // handleFormSubmit = () => {
    //     const { pincode } = this.state;
    //     localStorage.setItem('pincode', pincode);
    //     // localStorage.setItem('user', rememberMe ? user : '');
    // };
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
        const pin = this.state.pincode;
        console.log('pin' + pin);

        return (
            <div>
                {/* <Container fluid="md"> */}
                <div className="header">
                    <Navbar bg="dark" variant="dark">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                            </div>
                            <ul className="stick_menu">
                                <li><i className="fa mail_icon" aria-hidden="true"><img src="images/phone_icon.png" alt="" />
                                </i>Call
                                us <a href="tel:011- 23546413">
                                        011- 23546413</a></li>
                                <li><i className="fa fa-envelope mail_icon" >
                                    {/* <img src="images/phone_icon.png" alt="" /> */}
                                </i> Email us <a
                                    href="mailto:info@direct2lab.com">info@direct2lab.com</a></li>
                            </ul>
                        </div>
                    </Navbar>
                </div>
                <div className="bg_bennar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="heading_h1">
                                    <h1>Please Provide your loaction to search shop , Produts near You</h1>
                                </div>
                                <div className="col-md-3 formgroup">
                                    <Form.Group className="formgroup"
                                    // onSubmit={this.handleFormSubmit}
                                    >
                                        <Form.Control
                                            type="text"
                                            value={this.state.pincode}
                                            // onChange={this.handleChange}
                                            placeholder="Enter your Pincode here" />
                                        <Button
                                            variant="success"
                                            className="successButton"
                                            onClick={() => this.props.history.push('/StoreListing')}
                                        >Enter
                                        </Button>
                                    </Form.Group>
                                    <p>or</p>
                                    <Button
                                        className="Icon"
                                        onClick={this.getLocation}
                                        variant="danger"> Fetch current location
                                      <i class="fas fa-location"></i></Button>
                                    {/* <p>latitude : {this.state.latitude}</p>
                                    <p> longitude:{this.state.longitude}</p> */}
                                    <p>Address:{this.state.userAddress}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Row>
                        <div className="inpugroup">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter Your Pincode"
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
                {/* <p>Address:{this.state.userAddress}</p> */}
                {/* </div> */}
                {/* </Row> */}
                {/* </Container > */}
            </div >
        );
    }
}
export default HomePage;