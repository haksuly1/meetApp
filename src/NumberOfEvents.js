import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: ''
  }

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        numberOfEvents: number,
        infoText: 'Choose number between 1 and 32'
      });
    } else {
      this.setState({
        numberOfEvents: number,
        infoText: ''
      });
      this.props.updateNumberofEvents(number);
    }
  };

  render() {
    return (
      <div>
        <p>Change number of shown events between 1-32
        </p>

        <input type="number" value={this.state.numberOfEvents} className="newValue" onChange={(e) => this.handleInputChanged(e)} />
        <p><ErrorAlert text={this.state.infoText} /></p>
      </div>
    );
  }
}

export default NumberOfEvents;

/*
import React, { Component } from "react";
import { ErrorAlert } from './Alert';


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
*/

