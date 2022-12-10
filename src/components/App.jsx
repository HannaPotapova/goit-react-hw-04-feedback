import React, {useState} from "react";
import FeedbackOptions from "./FeedbackWidget/FeedbackOptions";
import Section from "./FeedbackWidget/Section";
import Statistics from "./FeedbackWidget/Statistics";
import Notification from "./FeedbackWidget/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(option) {

    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const countTotal = countTotalFeedback();
    return !countTotal ? 0 : Math.round(good/countTotal * 100)
  }

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
        </Section>

        {(countTotalFeedback() === 0 ?
          <Notification message="There is no feedback"></Notification> :
          <Section title="Statistics">
            <Statistics
              onStateGood={good}
              onStateNeutral={neutral}
              onStateBad={bad}
              onStateTotal={countTotalFeedback}
              onStatePercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        )}
    </>      
    )
} 

export default App;