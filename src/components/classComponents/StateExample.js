import React, { Component } from "react";
class StateExample extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>State Example</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default StateExample;
