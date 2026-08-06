import { useState, useEffect } from "react";
import "./Users.css";
import { useNavigate } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setData(data.users);
        console.log(data.users);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <div className="main">
        <h1>Users List</h1>

        {loading && <h1>Loading...</h1>}

        {error && <h1>{error}</h1>}

        {data.map((el) => {
          return (
            <div key={el.id} className="box">
              <div className="pic">
                <img src={el.image} alt={el.firstName} />
              </div>

              <p>Name: {el.firstName}</p>
              <p>Age: {el.age}</p>

              <button className="btn" onClick={()=>{
                navigate(`/users/${el.id}`)
              }}>View Details</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;
