import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import Event from "./Event";
import "./nprogress.css";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
Pie,
PieChart,
Sector,
Cell } from "recharts";
import EventGenre from "./EventGenre";
//import { mockData } from './mock-data';
//import React, { PureComponent } from 'react';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    //showWelcomeScreen: undefined
  }

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = location === "all" ? events : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({ events: locationEvents.slice(0, eventCount), currentLocation: location, });
      }
    });
  };

    updateNumberOfEvents = (eventCount) => {
      this.setState({
        numberOfEvents: eventCount,
      });
      this.updateEvents(this.state.currentLocation, eventCount);
    };
  
    getData = () => {
      const { locations, events } = this.state;
      const data = locations.map((location) => {
        const number = events.filter((event) => event.location === location).length
        const city = location.split(', ').shift()
        return { city, number };
      })
      return data;
    };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);

    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

    if (!navigator.onLine) {
      this.setState({
        OfflineAlertText: 'You are not connected to the internet'
      });
    } else {
      this.setState({
        OfflineAlertText: ''
      });
    }
  
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { locations, numberOfEvents } = this.state;
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />

    return (
      <div className='App'>
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>

        {/* Other components such as CitySearch, EventList,...etc */}
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />

        <CitySearch updateEvents={this.updateEvents} locations={locations} 
          //locations={this.state.locations}
          //updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEvents={this.updateEvents} 
        numberOfEvents={numberOfEvents} /> 

        <h4>Events in each city</h4>

        <div className="data-vis-wrapper">
          <EventGenre events={Event} />
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ 
              top: 20, 
              right: 20, 
              bottom: 20, 
              left: 20 
              }} >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
          {/*<WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}*/}
      </div>
    );
  }
}

export default App;



