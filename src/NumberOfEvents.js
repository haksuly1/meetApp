import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
    message: ""
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (number <=0 || number > 12) {
      this.setState({
        numberOfEvents: "",
        message: "Please enter a number between 1 and 12"
      });
    } else {
      this.setState({
        numberOfEvents: number,
        message: ""
      });
    }
    //this.props.updateNumberOfEvents(event.target.value);
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
          onChange={this.handleInputChanged} />
          
        <ErrorAlert text={this.state.message} />
      </div>
    );
  }
}
export default NumberOfEvents;