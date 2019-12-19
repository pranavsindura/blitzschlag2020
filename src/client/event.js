import React, { Component } from "react";
import TrackSlider from "./Trackslider"
export default class Event extends Component {
    state = {};
    render() {
        return(
            <div>
                <h1>Events</h1>
                <TrackSlider></TrackSlider>
            </div>
        );
    }
}