import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import profileUsers from "./db/user.json";
import data from "./db/data.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";

console.log(friends);

const { username, tag, location, avatar, stats } = profileUsers;

function App() {
  return (
    <div className="App">
      <h1>Hi!</h1>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
