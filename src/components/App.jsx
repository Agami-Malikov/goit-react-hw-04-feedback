import { useState } from 'react';
import Feedback from './Feedback/Feedback';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveVote = propName => {
    setState(prevState => {
      const value = prevState[propName];
      return {
        ...prevState,
        [propName]: value + 1,
      };
    });
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    const { good } = state;
    const result = Math.round((good / total) * 100);

    return result;
  };

  return (
    <div>
      <Feedback
        state={state}
        countTotalFeedback={total}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        leaveVote={leaveVote}
      />
    </div>
  );
};

export default App;
