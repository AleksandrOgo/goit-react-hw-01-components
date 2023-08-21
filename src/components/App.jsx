import { Profile } from './Profile/Profile.js';
import { Statistics } from './Statistics/Statistics.js'
import { Friendlist } from './Friendlist/FriendList.js'
import TransactionHistory from './TransactionHistory/TransactionHistory.js';
import user from '../Data/user.json'
import data from '../Data/data.json'
import friends from '../Data/friends.json'
import transactions from '../Data/transactions.json'



export const App = () => {
  return (
    <div>
<div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
    <div>
        <Statistics
          title="UPLOAD STATS"
          stats={data} />
      </div>
      <div>
        <Friendlist
          friends={friends} />
      </div>
      <div>
        <TransactionHistory
          items={transactions} />
      </div>
      </div>
  );
};
