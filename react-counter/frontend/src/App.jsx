import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          if(state <= 0){
            alert("No negative counting possible...")
            return state 
          }else{
            return state - 1
          }
          
        case 'RESET':
          return state = 0
        default:
          return state 
    }
}

function App() {
  const [ count , dispatch ] = useReducer(reducer,0)

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>{
        dispatch({
          type : 'INCREMENT',
        })
      }}>INCREMENT</button>
      <br />
      <button onClick={()=>{
        dispatch({
          type : 'DECREMENT',
        })
      }}>DECREMENT</button>
      <br />
      <button onClick={()=>{
        dispatch({
          type : 'RESET',
        })
      }}>RESET</button>
    </>
  )
}

export default App
