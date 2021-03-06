import React, { Component } from "react";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from './WelcomeScreen';
import { InfoAlert } from './Alert';
import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";
import EventGenre from "./EventGenre";
import "./nprogress.css";
import "./App.css";
//import { mockData } from './mock-data';

import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    showWelcomeScreen: undefined,
    infoText: ""
  }

  async componentDidMount() {
    // load events when app loads, make API call and save initial data to state
    // only update state if this.mounted is true to prevent that component unmounts before API call finished
    this.mounted = true;

    if (navigator.onLine && !window.location.href.startsWith('http://localhost')) {
      const accessToken = localStorage.getItem('access_token');
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');

      this.setState({
        showWelcomeScreen: !(code || isTokenValid)
      });

      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({
              events,
              locations: extractLocations(events),
              infoText: ""
            });
          }
        });
      }
    } else {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, 
            locations: extractLocations(events),
            infoText: "You are offline. Events cannot be loaded." 
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = async (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === "all")
        ? events
        : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        location
      });
    });
  }

  updateNumberOfEvents = async (length) => {
    this.setState({
      numberOfEvents: length
    });
  }

  // for data visualization
  getData = () => {
    const { locations, events } = this.state;
    // map locations and filter events by location to get length of resulting array
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      // to get only city name without country
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  }

  render() {
    const { locations, numberOfEvents, events, infoText, showWelcomeScreen } = this.state;

    return (
      <div className="App">
        <h1>Join a Meet!</h1>
        <div id="offline-alert-wrapper" style={infoText ? {} : { display: 'none' }}>
          <InfoAlert text={infoText} />
        </div>

        <div className="search-wrapper">
          <h2>Search for developer events in your city.</h2>
          <NumberOfEvents numberOfEvents={numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
          <CitySearch locations={locations} updateEvents={this.updateEvents} />
        </div>

        <div className="data-vis">
          <h3>Events in each city</h3>
          <div className="data-vis-wrapper">
            <EventGenre events={events.slice(0, numberOfEvents)} />
            <ResponsiveContainer height={400}>
              <ScatterChart id="scatter-container"
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>

                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="City" />
                <YAxis type="number" dataKey="number" name="Number of events" allowDecimals={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} label={""} labelFormatter={() => ""} />
                <Scatter data={this.getData().slice(0, numberOfEvents)} fill="#f0a384" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <EventList events={events.slice(0, numberOfEvents)} />
        {
          navigator.onLine &&
          <WelcomeScreen showWelcomeScreen={showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
        }
      </div>
    );
  }
}

export default App;



        