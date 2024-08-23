import FriendList from "./components/FriendList";
import initialFriends from "./data";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <h1>Split Bill</h1>
        <FriendList friends={initialFriends} />
      </div>
    </div>
  );
}

export default App;
