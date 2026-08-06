// import { useEffect, useState } from "react";

// function Products(){
//     const [products , setProducts] = useState([])
//     const [loading , setLoading] = useState(true)   
//     const [error , setError] = useState(null)

//     useEffect(()=>{
//     async function fetchdata(){
//         try{
//             const response = await fetch("https://jsonplaceholder.typicode.com/userrrrr")
//             if (!response.ok) {
//                 throw new Error("Failed to fetch products");
//             }

//             const data = await response.json()

//             setProducts(data)
//         }catch(error){
//             setError("Failed to load products...")
//         }finally{
//             setLoading(false)
//         }
//     }

//     fetchdata()
// },[])

// if(loading){
//         return (
//             <>
//             <h1>Loading the products....</h1>
//             </>
//         )
//     }

// if(error){
//     return(
//         <>
//         <h1>{error}</h1>
//         </>
//     )
// }

//     return (
//         <>
//         {products.map((el) => {
//             return <h2 key={el.id}>{el.name}</h2>
//         })}
//         </>
//     )

// }

// export default Products


import { useEffect, useState } from "react";
import axios from "axios";

function Products(){
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(true)   
    const [error , setError] = useState(null)

    useEffect(()=>{
    async function fetchdata(){
        try{
           const response = await axios.get("https://jsonplaceholder.typicode.com/users")
           setProducts(response.data)
        }catch(error){
            setError("Failed to load products...")
        }finally{
            setLoading(false)
        }
    }

    fetchdata()
},[])

if(loading){
        return (
            <>
            <h1>Loading the products....</h1>
            </>
        )
    }

if(error){
    return(
        <>
        <h1>{error}</h1>
        </>
    )
}

    return (
        <>
        {products.map((el) => {
            return <h2 key={el.id}>{el.name}</h2>
        })}
        </>
    )

}

export default Products


