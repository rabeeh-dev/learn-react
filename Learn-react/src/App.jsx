// // import Header from "./components/header"
// // import Hero from "./components/hero"
// // import Footer from "./components/footer"

// // import { useState } from "react"

// // function App(){
// //   return (
// //     <>

// //     <Header/>
// //     <Hero
// //     name = "Rabeeh"
// //     role = "Developer"
// //     age = {19}
// //     city = "Malappuram"
// //     />

// //     <Hero
// //     name = "Zayn"
// //     role = "Architect"
// //     age = {19}
// //     city = "malappuram"
// //     />

// //     <br />
// //     <Footer/>

// //     </>
// //   )
// // }


// // export default App


// // import { useState } from "react";

// // function App() {
// //   const [count, setCount] = useState(0);

// //   function increment() {
// //     setCount(count + 1);
// //   }

// //   return (
// //     <>
// //       <h1>{count}</h1>

// //       <button onClick={increment}>
// //         Increment
// //       </button>
// //     </>
// //   );
// // }

// // export default App;
// // import { useState } from "react"

// // function App(){
// //   const [count , setCount] = useState(0)

// //   function increment(){
// //     setCount(count + 1)
// //   }

// //   function decrement(){
// //     if(count === 0){
// //       alert("Already hited zero")
// //     }else{
// //       setCount(count - 1)
// //     }
// //   }

// //   function reset(){
// //     setCount(0)
// //   }
// //   return(
// //     <>
// //     <h1>Counter</h1>
// //     <h1>{count}</h1>
// //     <button onClick={increment}>+</button><br />
// //     <button onClick={decrement}>-</button><br />
// //     <button onClick={reset}>Reset</button>
// //     </>
// //   )
// // }


// // export default App

// // import { useState } from "react";

// // function App() {
// //   const [name, setName] = useState("");

// //   function handleChange(event) {
// //     setName(event.target.value);
// //   }

// //   return (
// //     <>
// //       <input
// //         type="text"
// //         value={name}
// //         // onChange={handleChange}
// //       />

// //       <h1>Hello {name}</h1>
// //     </>
// //   );
// // }

// // export default App;

// import { useState } from "react";

// function App(){
//   const [name , setName] = useState("")

//   function handleChange(event){
//     setName(event.target.value)
//   }


//   function showName(name){
//     let content
//     if(name === ""){
//       content = "Please Enter Your Name..."
//     }else{
//       content = `Hello, ${name}♥️`
//     }

//     return content
//   }


//   return(
//     <>
//       <h1>{showName(name)}</h1>
//       <input type="text"
//       value={name}
//       onChange={handleChange}
//       />

//     </>
//   )
// }

// export default App

import Navbar from "./components/Navbar"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import ProductDetails from "./pages/ProductDetails";


function App(){

  

  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default App