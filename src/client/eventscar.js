import React, { Component } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default class EventCar extends Component {

    state = {};
    render() 
    {
      const slides = [
        { title: 'First item', description: 'Lorem ipsum', backimg:'src/shared/img/img1.png'},
        { title: 'Second item', description: 'Lorem ipsum',backimg:'src/shared/img/img1.png'},
        { title: 'Third item', description: 'Lorem ipsum',backimg:'src/shared/img/img1.png'}
      ];
      return (
        <Slider autoplay infinite duration="5000">
        {slides.map((slide, index) => <div key={index}>
          <h2>{slide.title}</h2>
          <div>{slide.description}</div>
          <img src={slide.backimg}></img>
        </div>)}
      </Slider>
      );
    }
  }