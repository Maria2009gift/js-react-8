import React, { Component } from "react";
import Section from "../Section/Section";

class Notification extends Component {
  render() {
    return (
      <Section title="Statistic">
        <p>{this.props.message}</p>
      </Section>
    );
  }
}

export default Notification;
