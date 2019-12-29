import React, { Component } from "react";
import { Jumbotron, Table } from "reactstrap";
import { USER } from "../shared/usertest.js";
import "./UserMyaccount.css";
import Splash from "./Splash";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";

export default class Myaccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: USER
    };
    this.images = [
      "https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg"
    ];
  }
  renderDetails(user) {
    var acc = user.accomodation;
    if (user.accomodation == false) {
      acc = "no";
    } else {
      acc = "yes";
    }
    return (
      <div>
        <Table className="pro words" borderless responsive>
          <thead>
            <tr colSpan={2}>
              <th>
                <h4>Personal Information</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blitz ID:</td>
              <td>blitz20@{this.state.user.blitzID}</td>
            </tr>
            <tr>
              <td>College ID:</td>
              <td>{this.state.user.collegeID}</td>
            </tr>
            <tr>
              <td>Email ID:</td>
              <td>{this.state.user.email}</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td> {this.state.user.mob}</td>
            </tr>
            <tr>
              <td>Accomodation needed:</td>
              <td>{acc}</td>
            </tr>
            {this.renderTransaction(this.state.user)}
          </tbody>
        </Table>
      </div>
    );
  }
  renderTransaction(user) {
    if (user.isMNIT == false) {
      var trans = user.transactionID;
      if (user.transactionID == null) {
        trans = "not yet payed";
      }
      return (
        <tr>
          <td>Transaction ID:</td>
          <td>{trans}</td>
        </tr>
      );
    }
  }

  renderEventsPC(events) {
    if (events.length != 0) {
      return (
        <div className="eve">
          <h4>Participated Events</h4>
          <Table striped responsive>
            <thead>
              <tr>
                <th>Event</th>
                <th>Registeration ID</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => {
                return (
                  <tr key={event.teamId}>
                    <td>{event.name} </td>
                    <td> {event.teamId}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    }
    else {
        return (
            <div className="p-5"><h4>No Participated Events</h4></div>
        );
    }
  }
  renderEventsMOB(events) {
    if (window.innerWidth < 760) {
      if (events != null) {
        return (
          <div className="eve">
            <h4>Participated Events</h4>
            <hr></hr>
            <ul className="list-unstyled">
              {events.map(event => {
                return (
                  <li key={event.teamId}>
                    <p className="evelist">{event.name}</p>
                    {this.renderEventDetails(event)}
                    <hr></hr>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }
  }
  renderComponent() {
    if (window.innerWidth > 760) {
      return (
        <div>
          <Jumbotron>
            <h1>My Account</h1>
            <div className="boxi green">
              {this.renderEventsPC(this.state.user.events)}
            </div>
          </Jumbotron>
          <div className="pro ">
            <h2 className="words">
              {this.state.user.firstName} {this.state.user.lastName}
            </h2>
            <p className="words">{this.state.user.college}</p>
          </div>
          <br></br>
          <div className="pro row words">
            {this.renderDetails(this.state.user)}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Jumbotron>
            <h1>My Account</h1>
          </Jumbotron>
          <div >
            <h2 className="pro words">
              {this.state.user.firstName} {this.state.user.lastName}
            </h2>
            <p className="pro words">{this.state.user.college}</p>
          </div>
          <div className="pro words">
            {this.renderDetails(this.state.user)}
          </div>
          <div className="green">
            {this.renderEventsPC(this.state.user.events)}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Splash images={this.images} />
        <ReactFullpage
          scrollOverflow={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">{this.renderComponent()}</div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}
