import { StatisticItem } from '../StatisticItem/StatisticItem';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        {stats.length > 0 && (
          <ul className={css.stat_list}>
            {stats.map(stat => {
              return (
                <StatisticItem
                  label={stat.label}
                  percentage={stat.percentage}
                  key={stat.id}
                />
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};

export { Statistics };
