import React from 'react';
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { shallow, configure } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

configure({adapter: new Adapter()});

describe("Testing the <CourseList /> Component", () => {

	it("Test if <CourseList /> is rendered without crashing", () => {

		let component = shallow(<CourseList shouldRender />);

		expect(component.render()).not.toBe("undefined");
	});

	it("Test if <CourseList /> is rendered without crashing", () => {

		let component = shallow(<CourseList shouldRender />);

		expect(component.find(CourseListRow)).toHaveLength(5);
	});

});