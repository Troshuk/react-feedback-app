import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsMap = { good: setGood, neutral: setNeutral, bad: setBad };
  const total = good + neutral + bad;

  const handleCountIncrease = option => optionsMap[option](value => value + 1);
  const getPositivePercentage = () => total && (good / total) * 100;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleCountIncrease={handleCountIncrease}
          options={Object.keys(optionsMap)}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            options={{ good, neutral, bad }}
            total={total}
            positivePercentage={getPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export { App };
