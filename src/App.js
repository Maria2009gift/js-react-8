import "./App.css";
import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions ";
import Statistic from "./components/Statistic/Statistic";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setGoodbad] = useState(0);

  const goodRating = () => {
    setGood(good + 1);
  };

  const neutralRating = () => {
    setNeutral(neutral + 1);
  };

  const badRating = () => {
    setGoodbad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = good + neutral + bad;
    return (
      Number.parseInt((Number.parseInt(good) * 100) / Number.parseInt(total)) +
      "%"
    );
  };

  return (
    <>
      <FeedbackOptions
        addGood={goodRating}
        addNeutral={neutralRating}
        addBad={badRating}
      />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </>
  );
}

export default App;
