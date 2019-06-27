import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';

const { Canvas, Image, ImageData } = canvas;

faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

console.log(faceapi.nets);

class Recognition extends Component {

    
    render(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <video id="video" width="720" height="560" autoPlay muted>
                        
                    </video>
                </div>
            </div>
        )
    }

}

export default Recognition;



