import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [echo, setEcho] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/message")
      .then((res) => setMessage(res.data));

    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data));
  }, []);

  const sendData = async () => {
    const res = await axios.post("http://localhost:5000/api/echo", {
      text,
    });

    setEcho(res.data.echo);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{message}</h1>

      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={sendData}>Send</button>

      <h3>{echo}</h3>
    </div>
  );
}

export default App;