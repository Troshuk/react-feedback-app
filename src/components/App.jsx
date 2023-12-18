import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountIncrease = e => {
    const feedbackType = e.target.dataset.type;

    this.setState({
      [feedbackType]: this.state[feedbackType] + 1,
    });
  };

  getPositivePercentage = () => {
    const total = this.getTotal();

    if (!total) {
      return 0;
    }

    return (this.state.good / this.getTotal()) * 100;
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  render() {
    const total = this.getTotal();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleCountIncrease={this.handleCountIncrease}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={this.getPositivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
