import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import WithLogging from "./WithLogging";
import Login from '../Login/Login.js';
import { spy } from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
configure({ adapter: new Adapter() });

chai.use(sinonChai);
let logs = spy(console, 'log');

describe("test <WithLogging /> component", () => {
    test("console.log was called on mount and on unmount with Component when the wrapped element is pure html", () => {
		let wrapper = mount(
			<WithLogging>
				<p>simple phrase</p>
			</WithLogging>
		);
		expect(logs).to.have.been.calledWith('Component Component is mounted');
		wrapper.unmount();
		expect(logs).to.have.been.calledWith('Component Component is going to unmount');
	});

	test("Renders the correct children with <Login /> Component as a child", () => {
		let wrapper = mount(
			<WithLogging>
				<Login />
			</WithLogging>
      );
		expect(logs).to.have.been.calledWith('Component Login is mounted');
		wrapper.unmount();
		expect(logs).to.have.been.calledWith('Component Login is going to unmount');
	});
})