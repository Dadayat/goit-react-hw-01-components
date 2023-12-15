import css from './Transactions.module.css';

const Transactions = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tr className={css.line} key={id}>
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export { Transactions };
