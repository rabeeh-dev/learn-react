import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [time, setTime] = useState(new Date())
  useEffect(()=>{
    const id = setInterval(()=>{
      setTime(new Date())
    },1000)

    return ()=>{
      clearInterval(id)
    }
  },[])

  return (
    <>
      <h1>{time.toLocaleTimeString()}</h1>
    </>
  )
}

export default App
