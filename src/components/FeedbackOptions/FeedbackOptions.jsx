import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleCountIncrease }) => {
  return (
    <div className={css.feedback}>
      <button type="button" onClick={handleCountIncrease} data-type="good">
        Good
      </button>
      <button type="button" onClick={handleCountIncrease} data-type="neutral">
        Neutral
      </button>
      <button type="button" onClick={handleCountIncrease} data-type="bad">
        Bad
      </button>
    </div>
  );
};

export { FeedbackOptions };
