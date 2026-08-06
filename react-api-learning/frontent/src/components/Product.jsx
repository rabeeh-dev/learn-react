import { useEffect , useState } from "react";
import axios from "axios"

function Products({ products , setProduct, setEditingProduct , fetchProducts}){

    const deleteProduct = async (id) =>{
        await axios.delete(`http://localhost:3001/api/products/${id}`)
        fetchProducts()
    }

    return(
        <>
        <h1>Products :</h1>
        {products.map((e)=>{
            return (
                <div key={e.id}>
                    <hr />
                    <h2>{e.name}</h2>
                    <h4>{e.price}</h4>
                    <button onClick={()=> deleteProduct(e.id)}>Delete</button><br />
                    <button onClick={()=> setEditingProduct(e)}>Edit</button>
                    <hr />
                </div>
            )
        })}
        </>

    )
}

export default Products