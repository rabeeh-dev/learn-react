import { useRef, useEffect} from "react";
import "./App.css";

function App() {
  const usernameRef = useRef(null);

  useEffect(()=>{
    usernameRef.current.focus()
  },[])
  
  return (
    <>
      <div className="box">
        <h1>Login</h1>
        <input type="text" placeholder="Username" ref={usernameRef}/>
        <input type="password"  placeholder="Password"/>
        <button>Login</button>
      </div>
    </>
  );
}

export default App;
