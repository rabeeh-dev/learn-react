import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

function Add({editingProduct ,setEditingProduct, fetchProducts}){

    const [name , setName] = useState("")
    const [price , setPrice] = useState("")
    const [isloading , setloading] = useState(false)

    const addProduct = async (pr) =>{
        pr.preventDefault()
        console.log(name)
        console.log(price)

        try{
            setloading(true)
            if(editingProduct){
                await axios.put(`http://localhost:3001/api/products/${editingProduct.id}`,{
                    name ,
                    price
                })
                    setName("")
                    setPrice("")
                    setEditingProduct(null)
                    // alert("Product updated successfully!");
                    fetchProducts()
            }else{
                await axios.post("http://localhost:3001/api/products",{
                    name : name,
                    price : price
                })
                    setName("")
                    setPrice("")
                    // alert("Product added successfully!");
                    fetchProducts()
            }
        }catch(error){
            console.log(error)
        }finally{
            setloading(false)
        }
    }

    useEffect(()=>{
        if(editingProduct){
            setName(editingProduct.name)
            setPrice(editingProduct.price)
        }
    },[editingProduct])

    return(
        <div className="form">
            <h1>{editingProduct ? "Update Product" : "Add Product"}</h1>
            <form onSubmit={addProduct}>
                <label htmlFor="">Prouduct Name :</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/><br />
                <label htmlFor="">Price</label>
                <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)}/><br />
                <input type="submit" disabled={isloading} value={
                
                isloading? editingProduct? "Updating..." : "Adding..." : editingProduct? "UPDATE" : "ADD"}/> 
                <br />
                {editingProduct && <button 
                type="button"
                onClick={()=>{
                        setName(""),  setPrice("") , setEditingProduct(null)
                }}>x</button>}
            </form>
        </div>
    )
}

export default Add

