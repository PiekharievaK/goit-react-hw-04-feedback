import { useReducer } from 'react';
import FeedbackOptions from './Buttons/Buttons';
import Statistics from './TotalFeedback/TotalFeedback';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function reducer(state, action) {
  return { ...state, [action.type]: state[action.type] + action.payload };
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const incrementFeedback = name => {
    dispatch({ type: name, payload: 1 });
  };

  const countTotalFeedback = () => {
    let total = 0;
    for (const grade of Object.values(state)) {
      total += grade;
    }
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.floor(
      (state.good * 100) / countTotalFeedback()
    );
    return positivePercentage;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={incrementFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            options={state}
            totalValue={countTotalFeedback()}
            percentageValue={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
