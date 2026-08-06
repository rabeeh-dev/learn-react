import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function searchUser() {
    async function fetchUser() {
      setLoading(true);
      setError("");
      try {
        const responce = await fetch(
          `https://api.github.com/users/${username}`,
        );
        const data = await responce.json();
        console.log(data);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }

  return (
    <>
      <h1>Github User Searching : </h1>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      &nbsp;
      <button onClick={searchUser}>Search</button>
      <br />
      <br />
      <br />
      <br />

      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && (
  <>
    <h2>Username: {data.login}</h2>

    <div>
      <img src={data.avatar_url} alt={data.login} />
    </div>

    <h2>Name: {data.name}</h2>
    <h2>Followers: {data.followers}</h2>
    <h2>Following: {data.following}</h2>
    <h2>Public Repos: {data.public_repos}</h2>
    <h2>Location: {data.location}</h2>
    <h2>Bio: {data.bio}</h2>
  </>
)}
      
    </>
  );
}

export default App;
