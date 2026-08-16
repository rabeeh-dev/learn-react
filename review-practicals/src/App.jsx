import { memo , useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


// const Child = memo(function Child({name}){
//   console.log('child class rerender')
//   return(
//     <>
//     <h1>{name}</h1>
//     </>
//   )
// })


 const initialValue = {
    count : 0
  }

function reducer(state,action){
    switch(action.type){
      case 'increment':
        return {
        count: state.count + 1,
      };
      case 'decrement':
        return {
        count: state.count - 1,
      };
      case 'reset':
        return initialValue
      default:
        return state
    }
}

function App() {

 

  const [state , dispatch] = useReducer(reducer , initialValue)

  return (
    <>
      <h1>{state.count}</h1>

      <button onClick={()=>{
        dispatch({
          type : 'increment'
        })
      }}>Increment</button>&nbsp;

      <button onClick={()=>{
        dispatch({
          type : 'decrement'
        })
      }}>Decrement</button>&nbsp; 

      <button onClick={()=>{
        dispatch({
          type : 'reset'  
        })
      }}>Reset</button>


    </>
  )
}

export default App
