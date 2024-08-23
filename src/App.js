import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./data";
import "./index.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <h1>Split Bill</h1>
        <FriendList friends={initialFriends} />
        <FormAddFriend />
        <button className="button">Tambah Teman</button>
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;
