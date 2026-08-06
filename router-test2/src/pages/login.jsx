import { useNavigate } from "react-router";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (username === "rabeeh" && password === "123") {
      navigate("/dashboard");
    } else {
      alert("Incorrect Crentials!!");
    }
  }
  return (
    <>
      <div className="box">
        <br />
        username :
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        password :
        <input
          type="password"
          name=""
          id=""
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <button
          onClick={handleLogin}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default Login;
