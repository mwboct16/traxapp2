import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";



class CheckIn extends Component {
    state = {
        firstName: "Michael",
        lastName: "Black",
        address: "1234 Main Street",
        address2: "",
        city: "Somewhere",
        chosenState: "NJ",
        zipCode: "",
    }

    loadPersons = () => {
        API.getPerson()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Sign in Below!
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputFirstName">First Name</label>
                                    <input type="firstName" className="form-control" onChange={ this.handleInputChange } id="inputFirstName" placeholder="First Name"></input>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputLastName">Last Name</label>
                                    <input type="lastName" className="form-control" id="inputLastName" onChange={this.handleInputChange} placeholder="Last Name"></input>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="address" className="form-control" id="inputAddress" onChange={this.handleInputChange} placeholder="1234 Main St"></input>
                            </div>

                            <Link to = "/person"><button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}> Check In</button></Link>
                            
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default CheckIn;