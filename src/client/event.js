import React, { Component } from "react";
import "./Event.css"
import TrackSlider from "./Trackslider"
export default class Event extends Component {
    state = {};
    render() {
        return(
            <div>
                <h1>Events</h1>
                <br></br>
                <br></br>
                <TrackSlider></TrackSlider>
            </div>
        );
    }
}