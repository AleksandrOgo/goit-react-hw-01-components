import FriendListItem from './FriendListItem';
import style from './friendlist.module.css';

export const Friendlist = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={style.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
