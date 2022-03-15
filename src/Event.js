import React, { Component } from "react";

class Event extends Component {
  state = {
    event: {},
    collapsed: true
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-date">
          {event.start.dateTime} ({event.start.timeZone})
        </p>

        <p className="location">
          @{event.summary} | {event.location}
        </p>

        <button variant="outline-info"
          className={`details-button ${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
          >
          {collapsed ? "Show Details" : "Hide Details"}
        </button>

        {!collapsed && (
          <div
            className={`extra-details 
            ${this.state.collapsed ? "hide" : "show"}`}>
            <br />
            <h3 className="about">About Event</h3>
            <a href={event.htmlLink}
              target="_blank" rel="noreferrer">
              See deatails on Google calendar
            </a>
            <p className="event-description">{event.description}</p>
          </div>
        )}
          </div>
        );
  }
  }

export default Event;