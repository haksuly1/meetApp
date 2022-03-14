import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<EventList /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("Render summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("render the location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

 test("Render date and timezone", () => {
    expect(EventWrapper.find(".start-date")).toHaveLength(1);
  });

  test("Render show/hide details button", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });

  test("event element is collapsed by default", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("click on show details button to expand event details", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("click on hide details button to hide event details", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

/*
  test("render an event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render the show details button", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });

  test("open details when the button is clicked", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("hide details when the button is clicked", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("When the details button is clicked, the state will change from true to false", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("After the details button is clicked, the state will change from false to true", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".details-button").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
  */
});