import FriendListItem from './FriendListItem';
import {
  FriendListWrapper
} from './FriendList.styled';

export const Friendlist = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(({ avatar, name, isOnline, id }) => (
<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>


      ))}
    </FriendListWrapper>
  );
};
