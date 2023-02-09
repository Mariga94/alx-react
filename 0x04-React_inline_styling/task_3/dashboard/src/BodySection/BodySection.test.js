import React, { Children } from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionwithMarginBottom";

describe("<BodySection/>", () => {
  test("BodySection renders correctly the children and the one h2 element", () => {
    const component = shallow(
      <BodySection title="Title">
        <p>Children</p>
      </BodySection>
    );
    expect(component.find("h2")).toHaveLength(1);
    expect(component.find("p")).toHaveLength(1);
  });
});
