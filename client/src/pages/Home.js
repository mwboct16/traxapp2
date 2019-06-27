import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="Jumbotron">
                    <h1 className="display-4">Welcome to Trax!</h1>
                    <p className="lead">A new, innovative technology to store personal clients into database and track who comes in and
                out of your business.</p>
                
                <div className="buttons">
                    <Link to = "/SignUp" className="btn btn-primary btn-lg">Sign Up</Link>
                    <Link to = "/CheckIn" className="btn btn-primary btn-lg">Check In</Link>
                </div>

                </div>
            </div>
        )
    }
}

export default Home;