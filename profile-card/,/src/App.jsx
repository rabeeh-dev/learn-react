
  import { useEffect, useState,useRef } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import heroImg from './assets/hero.png'
  import './App.css'
  import ProfileCard from './components/ProfileCard'

  const users = [
    {name : 'rabeeh' , age : 19},
    {name : 'mazin' , age : 29},
    {name : 'irfan' , age : 29},
    {name : 'jaleel' , age : 39},
  ]

  function App() {
    const [theme, settheme] = useState('light')

    function handleTheme(){
      settheme((c)=>{
        return c === 'light' ? 'dark' : 'light'
      })   
    }

    return (
      <>
      <br />
        <button onClick={handleTheme}>{theme === 'light' ? "Dark Mode" : "Light Mode"}</button><br /><br />
        {users.map((users)=>{
          return (
            <div className={`profile-card ${theme}`} key={users.name}>
              <ProfileCard name={users.name} age={users.age}/>
              <br />
            </div>
          )
        })}
      </>
    )
  }

  export default App
  