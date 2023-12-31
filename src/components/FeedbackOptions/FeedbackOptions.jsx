import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, handleCountIncrease }) => {
  return (
    <div className={css.feedback}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => handleCountIncrease(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
