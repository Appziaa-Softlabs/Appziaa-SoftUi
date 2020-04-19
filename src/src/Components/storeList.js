import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
// import { CardBody } from 'react-bootstrap/Card';
import '../scss/storelist.scss';
// import history from '../history';
import Header from './header';
class StoreListing extends Component {
    constructor() {
        super()
        this.state = {
            // pincode: "",
            // name: "",
            // address: "",
            // contact: "",
            payload: []
        }
    }
    componentDidMount() {
        let pincode = localStorage.getItem('pincode');
        this.getStoreList(110016);
    }
    getStoreList(pincode) {
        let formData = new FormData();
        formData.append('pincode', 110016);
        fetch("https://rewardsplus.in/api/store/storeListing", {
            method: 'POST',
            body: formData
        }).then(function (response) {
            return response.json()
        }).then(data =>
            this.setState({
                payload: data.payload,
                // name: data.payload[0].store_name,
                // address: data.payload[0].address,
                // contact: data.payload[0].contact,

                // pincode: data.results[0].address_components[5].long_name,

            }

            )
        )


    }

    render() {
        const data = this.state.payload;
        // console.log(data, 'payload');
        return (
            <div class="">
                <div className="">
                    <Header></Header>
                </div>

                <h2 className="StoreHeading">Select Store</h2>

                <div class="row col-md-12 container-fluid shadow-lg p-3 mb-5 bg-white rounded">
                    <div class="col-8">
                        {data.map(storelist => (
                            <Card className="mb-2 card shadow-lg p-3 mb-5 bg-white rounded">
                                <Card.Body>
                                    <ul className="ul">
                                        <li>
                                            {/* <Button type="radio"></Button> */}
                                            {storelist.store_name}</li>
                                        <li>{storelist.address}</li>
                                        <li>{storelist.contact}</li>
                                    </ul>
                                    <Button onClick={() => this.props.history.push('/StoreListing/index')}>soap now</Button>
                                </Card.Body>
                                {/* <Card.Body>{storelist.address}</Card.Body> */}
                                {/* <Card.Body></Card.Body> */}

                            </Card>

                        ))}

                    </div>
                </div>

            </div>
        );
    }
}
export default StoreListing;