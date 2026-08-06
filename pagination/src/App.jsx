import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [total , setTotal] = useState(0)

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        setError("");
        const response = await fetch(
          `https://dummyjson.com/users?limit=5&skip=${(pageNumber - 1) * 5}`,
        );
        const data = await response.json();
        console.log(data.users);
        setData(data.users);
        const totalPages = Math.ceil(data.total / 5)
        setTotal(totalPages)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser()
  },[pageNumber]);

  return (
    <>
      <h1>Users :</h1>
      <div>
        <hr />
        <div className="box">
          {data.map((el)=>{
            return (
            <>
            <div key={el.id} className="profile">
            <div>
              <img src={el.image} alt="" />
            </div>
              <p>{el.firstName}</p>
              <p>Age : {el.age}</p>
            </div>
           
            </>
            )
          })}
        </div>
        <hr />
        <div>
          <button onClick={()=>{
            if(pageNumber > 1){
              setPageNumber((prev)=> prev-1)
            }
          }}>Previous</button>&nbsp;
          <span>{pageNumber}</span>&nbsp;
          <button onClick={()=>{
            if(pageNumber < total){
               setPageNumber((prev)=> prev+1)
            }
          }}>Next</button>
          <br />
          <h4>Total Pages : {total}</h4>
        </div>
      </div>
    </>
  );
}

export default App;
