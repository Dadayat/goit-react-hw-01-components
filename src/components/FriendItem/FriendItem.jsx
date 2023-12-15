import css from './FriendItem.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={
          isOnline ? `${css.status} ${css.green}` : `${css.status} ${css.red}`
        }
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export { FriendItem };
