import React from "react";

export default class WithLogging extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let com = this.props.children.type.name || "Component";
    console.log(`Component ${com} is mounted`);
  }

  componentWillUnmount() {
    let com = this.props.children.type.name || "Component";
    console.log(`Component ${com} is going to unmount`);
  }

  render() {
    return this.props.children;
  }
}
