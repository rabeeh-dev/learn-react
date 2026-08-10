import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const [undo , setUndo] = useState(0)
  const [redo , setRedo] = useState(0)

  const [player1 , setPlayer1] = useState(0)
  const [player2 , setPlayer2] = useState(0)

  function handleIncrement() {
    if (count >= 100) {
      alert("only counting to 100 possibble");
    } else {
      setCount((prev) => prev + step);
    }
  }

  function handleDecrement() {
    if (count < 1) {
      alert("counter at zero no more decrement");
    } else {
      setCount((prev) => prev - step);
    }
  }
  function handleReset() {
    setCount(0);
  }

  function handleStep(step) {
    setStep(step);
  }

  function handlePlayer1(operation){
    if(operation === '+'){
      setPlayer1((prev)=> prev+1)
    }else{
      setPlayer1((prev)=> prev-1)
    }
  }

  function handlePlayer2(operation){
    if(operation === '+'){
      setPlayer2((prev)=> prev+1)
    }else{
      setPlayer2((prev)=> prev-1)
    }
  }

  function handleUndo(){

  }


  return (
    <>
      <div className="box">
        <h1>Counter</h1>
        <h1>[{count}]</h1>
        <button onClick={()=>{
          setUndo(count)
          handleIncrement()
          setRedo(count)
        }}>INCREMENT</button>&nbsp;
        <button onClick={()=>{
          setUndo(count)
          handleDecrement()
          setRedo(count)
        }} disabled={count === 0}>
          DECREMENT
        </button>
        &nbsp;
        <button onClick={()=>{
          setUndo(count)
          handleReset()
          setRedo(count)
        }} disabled={count === 0}>
          RESET
        </button>
        &nbsp;
        <div className="mini-box">
          <button
            onClick={() => {
              handleStep(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handleStep(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              handleStep(10);
            }}
          >
            10
          </button>
        </div>

        <div style={{width:400, height:50 , backgroundColor:'black'}}>
          <button onClick={()=>{
            setCount(undo)
          }}>UNDO</button><br />
          <button onClick={()=>{
            setCount(redo)
          }}>REDO</button>
        </div>
      </div>

      <div className="box">
        <h1>Counter Match</h1>

        <div className="player-box">
          <h2>Player one</h2>
          <h3>{player1}</h3>
          <button onClick={()=>{
            handlePlayer1('+')
          }}>INCREMENT</button>
          <button onClick={()=>{
            handlePlayer1('-')
          }} disabled={player1===0}>DECREMENT</button>
        </div>



       <div className="player-box">
          <h2>Player Two</h2>
          <h3>{player2}</h3>
          <button onClick={()=>{
            handlePlayer2('+')
          }}>INCREMENT</button>
          <button onClick={()=>{
            handlePlayer2('-')
          }} disabled={player2===0}>DECREMENT</button>
        </div>

          <h1>{(player1>player2)?'Player one is winning' : (player2>player1)? 'Player two is winning' : 'Its is a tie'}</h1>
      </div>
    </>
  );
}

export default App;
