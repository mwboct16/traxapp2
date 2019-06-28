import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";



class SignUp extends Component {

    state = {
        firstName: "Michael",
        lastName: "Black",
        address: "12 Newport Lane",
        address2: "",
        city: "Willingboro",
        chosenState: "New Jersey",
        zipCode: "12345",
    }

    handleInputChange = event => {
        // let value = event.target.value;
        // const name = event.target.name;
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.name && this.state.address) {
            API.createPerson({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                address2: this.state.address2,
                city: this.state.city,
                chosenState: this.state.chosenState,
                zipCode: this.state.zipCode,

            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
        console.log(this.state);


    };

    // componentDidMount(){

    // }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Let's Start Here!
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

                            <div className="form-group">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="address" className="form-control" id="inputAddress2" onChange={this.handleInputChange} placeholder="Apt., Studio, or Floor"></input>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="city" className="form-control" id="inputCity" onChange={this.handleInputChange} placeholder="" ></input>
                                </div>

                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" className="form-control">
                                        <option defaultValue>Choose...</option>
                                        <option value="separater">---</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip Code</label>
                                    <input type="zipCode" className="form-control" onChange={this.handleInputChange} id="inputZip" placeholder=""></input>
                                </div>
                            </div>

                            
                            <Link to = "/CheckIn"><button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Sign Up!</button></Link>
                            
                        </form>

                    </div>
                </div>
            </div>
        )

    }
}

export default SignUp;