import React, {Component} from "react";
import FeedbackOptions from "./FeedbackWidget/FeedbackOptions";
import Section from "./FeedbackWidget/Section";
import Statistics from "./FeedbackWidget/Statistics";
import Notification from "./FeedbackWidget/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (event) => {
    this.setState(prevState => ({
      [event.target.innerText.toLowerCase()]: prevState[event.target.innerText.toLowerCase()] + 1,
    }));
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    const countTotal = this.countTotalFeedback();
    return !countTotal ? 0 : Math.round(this.state.good/countTotal * 100)
  }

  render() {
    const {good, neutral, bad} = this.state;
        
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
        </Section>

        {(this.countTotalFeedback() === 0 ?
          <Notification message="There is no feedback"></Notification> :
          <Section title="Statistics">
            <Statistics
              onStateGood={good}
              onStateNeutral={neutral}
              onStateBad={bad}
              onStateTotal={this.countTotalFeedback}
              onStatePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </>      
    );
  }
}

export default App;