import css from './StatisticItem.module.css';
import { makeGray } from './makeGrey';

const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: `${makeGray()}` }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

export { StatisticItem };
