import css from './Statistics.module.css';

export const Statistics = ({ options, positivePercentage }) => {
  return (
    <div className={css.statisticsContainer}>
      {Object.entries(options)?.map(([name, value]) => (
        <div key={name}>
          {name}: <span>{value}</span>
        </div>
      ))}
      <div>
        Positive feedback: <span>{positivePercentage?.toFixed()}%</span>
      </div>
    </div>
  );
};
