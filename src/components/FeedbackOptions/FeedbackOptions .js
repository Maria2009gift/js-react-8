import React, { Component } from "react";
import Section from "../Section/Section";

class Buttons extends Component {
  render() {
    return (
      <Section title="Please leave feedback">
        <button onClick={this.props.addGood}>Good</button>
        <button onClick={this.props.addNeutral}>Neutral</button>
        <button onClick={this.props.addBad}>Negative</button>
      </Section>
    );
  }
}

export default Buttons;
