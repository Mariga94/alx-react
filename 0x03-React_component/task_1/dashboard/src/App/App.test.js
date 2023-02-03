import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  let events;

  beforeEach(() => {
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
  });

  it("<App /> renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toEqual(wrapper);
  });

  it("verify that when the keys 'control' and 'h' are pressed the 'logOut' function", (done) => {
    const logOut = jest.fn(() => void 0);
    shallow(<App />);
    window.alert = logOut;
    events.keydown({ keyCode: 72, ctrlKey: 72 });
    except(logOut).toHaveBeenCalled();
    done();
  });
});
