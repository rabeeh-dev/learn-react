import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function handleIncrement(){
    setCount(count + 1)
  }
  function handleDecrement(){
    setCount(count - 1)
  }

  useEffect(()=>{
    document.title = `count : ${count}`
  },[count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>&nbsp;
      <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default App
