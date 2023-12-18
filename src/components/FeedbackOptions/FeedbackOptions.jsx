import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleCountIncrease }) => {
  return (
    <div className={css.feedback}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          data-type={option}
          onClick={handleCountIncrease}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export { FeedbackOptions };
