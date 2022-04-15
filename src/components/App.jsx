import { Component } from 'react';
import FeedbackOptions from './Buttons/Buttons';
import Statistics from './TotalFeedback/TotalFeedback';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    for (const grade of Object.values(this.state)) {
      total += grade;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.floor(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return positivePercentage;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              options={this.state}
              totalValue={this.countTotalFeedback()}
              percentageValue={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
