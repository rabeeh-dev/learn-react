import { useState , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const RefCount = useRef(0)

  return (
    <>
      <div className='box'>
        <h1>Count : {count}</h1>
        <button onClick={()=>{
          setCount((prev)=> prev+1)
        }}>Increment</button>
        <h1>Ref Count : {RefCount.current}</h1>
        <button onClick={()=>{
          RefCount.current += 1
          console.log(RefCount.current)
        }}>Increment Ref</button>
      </div>
    </>
  )
}

export default App
