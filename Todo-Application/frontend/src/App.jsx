import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const todo = {
        id: state.length + 1,
        text: action.payload.input,
        completed: false,
      };
      const newarr1 = [...state, todo];
      return newarr1;
    case "DELETE_TODO":
      const newarr = state.filter((el)=>el.id!==action.payload)
      return newarr
    case "TOGGLE_TODO":
      const updatedTodos = state.map((el)=>{
        if(el.id === action.payload){
          return {...el,
            completed: el.completed ? false : true
          }
        }
        return el;
      })
      return updatedTodos;
    case "EDIT_TODO":
      const updatedTodos1 = state.map((el)=>{
        if(el.id === action.payload.id){
          return {
            ...el,
            text : action.payload.text
          }
        }
        return el
      })
      return updatedTodos1;
    default:
      return state;
  }
}

function App() {
  const savedTodos = localStorage.getItem("todos")
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : []
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [input, setInput] = useState("");
  const [edittingId , setEdittingId] = useState(null)
  const [editText , setEditText] = useState("")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>TO DO LIST</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          if (input.trim() === "") return;
          dispatch({
            type: "ADD_TODO",
            payload: { input },
          });
          setInput("");
        }}
      >
        ADD
      </button>
      <br />
      <br />
      {todos.map((el) => {
        return (
          <div key={el.id}><hr />

            {/* <li>{el.completed ? el.text + " ✅" : el.text + " ⬜"}</li> */}

            {edittingId === el.id ? <input value={editText} onChange={(e)=> setEditText(e.target.value)}/> : <li>{el.completed ? el.text + " ✅" : el.text + " ⬜"}</li>}

            {edittingId !==el.id ?(
              <button onClick={()=>{
              dispatch({
                type : 'TOGGLE_TODO',
                payload : el.id
              })
            }}>COMPLETE</button>
            ) :(
              <p>Editting...</p>
            )}
            
            <br />
           
            {edittingId === el.id 
              ? (
                <button onClick={()=>{
                  dispatch({
                    type:'EDIT_TODO',
                    payload : {
                      id : edittingId,
                      text : editText
                    }
                  })
                  setEdittingId(null)
                }}>SAVE</button>
              ) :
              (
                 <button 
            onClick={()=>{
              setEdittingId(el.id)
              setEditText(el.text)
            }}
            >EDIT</button>
              )
            }


            <br />
          <button onClick={()=>{
            dispatch({
              type : 'DELETE_TODO',
              payload : el.id
            })
          }}>DELETE</button>
          <hr />
          </div>
        )

      })}
    </>
  );
}

export default App;
