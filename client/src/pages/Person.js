import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";


class Person extends Component {
    state = {
        firstName: "Michael",
        lastName: "Black",
        address: "1234 Main Street",
        address2: "",
        city: "Somewhere",
        chosenState: "New Jersey",
        zipCode: "12345",
        Date: new Date()
    }

    render() {
        return (
            <div className="container">
                <div className="card my-auto" id="infoCard">
                    <div className="card-header text-center">Applicant Info</div>
                    <div className="card-body text-center">
                    <h1>Name: {this.state.firstName + " " + this.state.lastName} </h1>
                        <h3>Address: {this.state.address} </h3>
                        <h3>City: {this.state.city} </h3>
                        <h3>State: {this.state.chosenState} </h3>
                        <h3>Zip: {this.state.zipCode} </h3>
                        <h3>Signed in: {this.state.Date.toLocaleTimeString()} </h3>
                    </div>

                </div>
            </div>
        )
    }
};

export default Person;