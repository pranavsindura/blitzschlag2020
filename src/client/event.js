import React, { Component } from "react";
import "./Event.css";
import ControlledCarousel from "./EventCar.js"
export default class Event extends Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
         <ControlledCarousel />
      </div>
    );
  }
}
