import React, { Component } from "react";
import "./Home.css";
import EventCar from "./eventscar"
import TrackSlider from "./Trackslider"
export default class Home extends Component {
  state = {};
  render() 
  {
    return (
      <div><h1>Hello World</h1>
      <TrackSlider></TrackSlider>
      {/* <EventCar></EventCar> */}
      </div>
    );
  }
}
