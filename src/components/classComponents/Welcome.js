import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Welcome;
