import { shallow } from "enzyme";
import React from "react";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateEventNumbers={() => { }} />
    );
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


