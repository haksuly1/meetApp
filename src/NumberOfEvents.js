import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    // stting the values for the default states
    this.state = {
      numberOfEvents: 32,
    };
  }

  updateNumberOfEvents = (event) => {
    this.setState({
      numberOfEvents: event.target.value,
    });
    this.props.updateEventNumbers(event.target.value);
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <label className='numberOfEvents__lable'>Number of Events</label>
        <input
          type='number'
          className='numberOfEvents__input'
          value={this.state.numberOfEvents}
          onChange={this.updateNumberOfEvents}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;


/*
import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    // stting the values for the default states
    this.state = {
      numberOfEvents: 32,
    };
  }
  
  updateNumberOfEvents = (event) => {
    this.setState({
      numberOfEvents: event.target.value,
    });
    //this.props.updateEventNumbers(event.target.value);
  };
  */

  /*
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        infoText: "Enter number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: "",
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
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
    
  render() {
    return (
      <div className="numberOfEvents">
        <label className="numberOfEvents__lable">Number of Events</label>
        <input
          type="number"
          className="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.updateNumberOfEvents}>
          </input>
      </div>
    );
  }
}

export default NumberOfEvents;
*/