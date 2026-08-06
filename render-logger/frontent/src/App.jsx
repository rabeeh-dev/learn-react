import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(){
    setCount(count+1)
  }
  console.log("Component Rendered!!")

  useEffect(()=>{
    console.log("Effect Ran!!")
  },[count])
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
    </>
  )
}

export default App
