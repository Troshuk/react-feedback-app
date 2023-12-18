import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statisticsContainer}>
      <div>
        Good: <span>{good}</span>
      </div>
      <div>
        Neutral: <span>{neutral}</span>
      </div>
      <div>
        Bad: <span>{bad}</span>
      </div>
      <div>
        Total: <span>{total}</span>
      </div>
      <div>
        Positive feedback: <span>{positivePercentage.toFixed()}%</span>
      </div>
    </div>
  );
};

export { Statistics };
