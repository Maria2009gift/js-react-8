import "./App.css";
import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions ";
import Statistic from "./components/Statistic/Statistic";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodRating = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };

  neutralRating = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };

  badRating = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return (
      Number.parseInt(
        (Number.parseInt(this.state.good) * 100) / Number.parseInt(total)
      ) + "%"
    );
  };

  render() {
    return (
      <>
        <FeedbackOptions
          addGood={this.goodRating}
          addNeutral={this.neutralRating}
          addBad={this.badRating}
        />
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
