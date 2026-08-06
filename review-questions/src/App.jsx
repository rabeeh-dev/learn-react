import { useState , useEffect} from 'react'



function App() {
  const [count , setCount] = useState(0)
  const [visible , setVisible] = useState(true)
  const [text , setText] = useState("")

  const [todos , setTodos] = useState([])
  const [input , setInput] = useState("")
  const [isEditing , setIsEditing] = useState(null)
  const [filter , setFilter] = useState('all')

  function handleIncrement(){
    setCount(count + 1)
  }

  function handleDecrement(){
    setCount(count - 1)
  }

  function handleReset(){
    setCount(0)
  }

  function handleVisibile(){
    setVisible(!visible)
  }

  function handleCharacter(e){
    setText(e.target.value)
  }


  function handleInput(e){
    setInput(e.target.value)
  }
  
  function handleTodo(){
    const newTodo = {
      id : todos.length + 1,
      text : input,
      completed : false
    }

    const newarr = [...todos,newTodo]
    setTodos(newarr)
    setInput("")
  }

  function handleDeleteTodo(key){
    const newTodo1 = todos.filter((el)=> el.id !== key)
    setTodos(newTodo1)
  }

  function handleEditTodo() {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === isEditing) {
        return {
          ...todo,
          text: input,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
    setInput("");
    setIsEditing(null);
  }

  function handleComplete(key){
    const updatedTodos1 = todos.map((todo)=>{
      if(todo.id === key){
        return {
          ...todo,completed : !todo.completed
        }
      }
      return todo
    })
    setTodos(updatedTodos1);
  }

  function handleFilter(){
    let filteredTodos

    if(filter === 'all'){
      filteredTodos = todos
    }else if(filter === 'completed'){
      filteredTodos = todos.filter((el)=> el.completed === true)
    }else{
      filteredTodos = todos.filter((el)=> el.completed === false)
    }
    console.log(filteredTodos)
    return filteredTodos
    
  }


  const filteredTodos = handleFilter()

  return(
    <div>
      <hr />
      <h1>COUNTER :</h1><br />
      <h1>{visible ? count : ""}</h1> 
      <button onClick={handleVisibile}>{visible ? "HIDE" : "SHOW"}</button>
      <br /><br /><br />
      <button onClick={handleIncrement}>INCREMENT</button>&nbsp;
      <button onClick={handleDecrement} disabled={count === 0}>DECREMENT</button>&nbsp;
      <button onClick={handleReset}>RESET</button><br /><br />
      <hr />
      <br />
      <hr />
      <h1>INPUT  TO  CHARACTER</h1><br />
      <input type="text" onChange={handleCharacter}/><br /><br />
      <h2>{text >= 50 ? "Charactor Limit exceed!" : `Charcters : ${text.length}`}</h2>
      <hr /><br />
      <hr />

      <hr />
      <h1>TODO APPLICATION</h1>
      <br />
      <input type="text" value={input} onChange={handleInput}/>&nbsp;
      <button onClick={isEditing? handleEditTodo : handleTodo}>{isEditing?'SAVE':'ADD'}</button>

      <hr />
      <button onClick={()=>{
        setFilter('all')
      }}>ALL</button>&nbsp;
      <button onClick={()=>{
        setFilter('completed')
      }}>COMPLETE</button>&nbsp;
      <button onClick={()=>{
        setFilter('incompleted')
      }}>INCOMPLETE</button>
      <hr />

      {filteredTodos.map((todo)=>{
        return (
          <div key={todo.id}>

          <li>{todo.completed ? `✅ ${todo.text}` : `⬜ ${todo.text}`}</li>

          <button onClick={()=>{
            handleComplete(todo.id)
          }}>COMPLETE</button>&nbsp;

          <button onClick={()=>{
            setIsEditing(todo.id)
            setInput(todo.text)
          }}>EDIT</button>&nbsp;

          <button onClick={()=>{
            handleDeleteTodo(todo.id)
            disabled={isEditing}
          }}>Delete</button>
          <hr />
          </div>
        )
      })}



    </div>
  )
}

export default App
