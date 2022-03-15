import React, { Component } from 'react';
import './App.css';
import "./nprogress.css";
import EventList from './EventList';
import CitySearch from './CitySearch';
//import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations, } from "./api";


class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
        });
      }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === "all") ? 
      events : 
      events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default App;