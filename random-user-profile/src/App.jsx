import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUser() {
       setIsLoading(true);
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  
  useEffect(() => {
    
    fetchUser();
  }, []);

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>
  if (!data) return null

  const user = data.results[0]

  return (
    <>
      <img src={user.picture.large} alt={user.name.first}/>
      <h1>Name: {user.name.first} {user.name.last}</h1>
      <h2>Email: {user.email}</h2><br />
      <button onClick={fetchUser}>Next User</button><br /><br />
    </>
  );
}

export default App;
