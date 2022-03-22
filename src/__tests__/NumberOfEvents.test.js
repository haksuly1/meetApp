import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: "10" });
    NumberOfEventsWrapper.find(".numberOfEvents").simulate("change", {
      target: { value: "10" },
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual("10");
  });
});



/*
describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render textbox element correctly", () => {
    expect(NumberOfEventsWrapper.find(".event")).toHaveLength(1);
  });

  test("Change event on textbox", () => {
    expect(NumberOfEventsWrapper);
  });
});
*/