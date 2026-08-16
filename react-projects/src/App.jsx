import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Faq from "./components/faq";
import Todo from './components/TodoForm'
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [open, setOpen] = useState([]);
  const [todo , setTodo] = useState([])
  const [isEdit , setIsEdit] = useState(false)
  const [editItem , setEditItem] = useState(null)


  const uuid = uuidv4();


  // const faq = [
  //   { id: 1, question: "question 1", answer: "answer 1" },
  //   { id: 2, question: "question 2", answer: "answer 2" },
  //   { id: 3, question: "question 3", answer: "answer 3" },
  // ];

  // function handleToggle(id) {
  //   setOpen((current) => {
  //     if (current.includes(id)) {
  //       return current.filter((item) => item !== id);
  //     } else {
  //       return [...current, id];
  //     }
  //   });
  // }


  function handleAddTodo(text){
    const newtodo = {
      id : uuid,
      text : text,
      completed : false
    }

    setTodo((curr)=>{
      return [...curr,newtodo]
    })
  }

  function handleDelete(id){
    const newtodo1 = todo.filter((todo)=> todo.id !== id)
   setTodo(newtodo1)
  }

  function handleEdit(id) {
    const selectedTodo = todo.find((item) => item.id === id);

    setEditingTodo(selectedTodo);
    setIsEdit(true);
  }

  function handleUpdateTodo(text) {
    setTodo((curr) =>
      curr.map((item) =>
        item.id === editingTodo.id ? { ...item, text } : item
      )
    );

    setEditingTodo(null);
    setIsEdit(false);
  }

  console.log(todo)
  

  return (
    <>
      {/* <div className="faq">
        <h1>FAQ</h1>
        <br />
        <br />
        {faq.map((fq) => {
          return (
            <Faq
              key={fq.id}
              question={fq.question}
              answer={fq.answer}
              open={open.includes(fq.id)}
              onToggle={handleToggle}
              id={fq.id}
            />
          );
        })}

         <hr />
      </div> */}

       
      <div className="todo">
        <TodoForm giveInput={handleAddTodo} />
        <TodoItems todo={todo} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>
    </>
  );
}

export default App;
