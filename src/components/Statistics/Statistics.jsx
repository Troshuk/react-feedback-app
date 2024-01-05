import css from './Statistics.module.css';

export const Statistics = ({ options }) => {
  return (
    <div className={css.statisticsContainer}>
      {Object.entries(options)?.map(([name, value]) => (
        <div key={name}>
          {name.replace(/([A-Z])/g, ' $1')}: <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
