import { FriendItem } from '../FriendItem/FriendItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <FriendItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export { FriendList };
