import style from './friendlist.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={style.online}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
}
