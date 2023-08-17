import { Profile } from './Profile.js';

import user from '../Data/user.json'

export const App = () => {
  return (
<div>
    <Profile>
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      </Profile>
      </div>
  );
};
