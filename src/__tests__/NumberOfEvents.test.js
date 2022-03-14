import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render textbox element correctly", () => {
    expect(NumberOfEventsWrapper.find(".newValue")).toHaveLength(1);
  });

  test("Change event on textbox", () => {
    expect(NumberOfEventsWrapper);
  });

  /*
  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: "32" });
    NumberOfEventsWrapper.find(".numberOfEvents").simulate("change", {
      target: { value: "13" },
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual("13");
  });
  */
});