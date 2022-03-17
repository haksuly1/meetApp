import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    message: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1|| number > 32) {
      this.setState({
        message: "Enter number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: number,
        message: "",
      });
    }
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
          value={this.state.NumberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;