import React, { Component } from "react";
import { Link } from "react-router-dom";
// import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';

// const { Canvas, Image, ImageData } = canvas;

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
    faceapi.nets.faceExpressionNet.loadFromUri("./models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("./models")
]).then(startVideo)

faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

// console.log(faceapi.nets);

const video = document.getElementById('video');

video.addEventListener('play', () => {
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    }, 100)
})

class Recognition extends Component {


    startVideo() {
        navigator.getUserMedia(
            { video: {} },
            stream => video.srcObject = stream,
            err => console.error(err)
        )
    }

    
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



