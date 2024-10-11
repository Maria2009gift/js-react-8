import React, { Component } from "react";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class Statistic extends Component {
  render() {
    if (this.props.good > 0 || this.props.neutral > 0 || this.props.bad > 0) {
      return (
        <Section title="Statistics">
          <div>
            <p>Good: <span>{this.props.good}</span></p>
            <p>Neutral: <span>{this.props.neutral}</span></p>
            <p>Negative: <span>{this.props.bad}</span></p>
            <p>Total: <span>{this.props.total}</span></p>
            <p>Positive feedback: <span>{this.props.positivePercentage}</span></p>
          </div>
        </Section>
      );
    } else {
      return <Notification message="There is no feedback" />;
    }
  }
}

export default Statistic;
