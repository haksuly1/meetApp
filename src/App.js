import React, { Component } from 'react';
import './App.css';
import "./nprogress.css";
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
import { OfflineAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";


class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
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
        OfflineText:
          "Sorry to tell you that you are offline, the events won't be updated!",
      });
    } else {
      this.setState({
        OfflineText: "",
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.location, numberOfEvents)
    );
  };

  /*
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents), 
          locations: extractLocations(events) 
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
*/

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === "all" && eventCount === 0
          ? events
          : location !== "all" && eventCount === 0
            ? events.filter((event) => event.location === location)
            : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  };

/*
  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
      location === "all" 
      ? events: events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: localEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
      });
  };
*/

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    const { events, locations, numberOfEvents, OfflineText } = this.state;
    return (
      <div className="App">
        <OfflineAlert text={OfflineText} />
        <CitySearch
          locations={locations}
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          updateNumberOfEvents={(number) => {
            this.updateNumberOfEvents(number);
          }}
        />
        <EventList events={events} numberOfEvents={numberOfEvents} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

/*
  render() {
    return (
      <div className="App">
        <CitySearch 
        locations={this.state.locations} 
        updateEvents={this.updateEvents} />
        <EventList events={this.state.events}
        numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}
*/

export default App;