import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <br></br>
        <p>Number of Events:</p>
        <input
          type="number"
          className="numberOfEvents"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />

        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}
export default NumberOfEvents;