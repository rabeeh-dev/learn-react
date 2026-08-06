import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import UserList from './components/UserList'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title={"Main"}/>
      <UserList/>
    </>
  )
}

export default App
