import { useState } from "react";
import Products from "./components/Product";
import Add from "./components/add-product";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import themeContext from "./context/themeContext";
import ThemeStatus from "./components/themeStatus"

function App() {
    const [products , setProduct] = useState([])
    const [editingProduct, setEditingProduct] = useState(null);
    const [isLoadingProducts , setIsLoadingProducts] = useState(true)
    const {theme , setTheme} = useContext(themeContext)

    async function fetchProducts(){
      setIsLoadingProducts(true)
        try{
          const response = await axios.get("http://localhost:3001/api/products")
          setProduct(response.data)
        }catch(error){
          console.log(error)
        }finally{
          setIsLoadingProducts(false)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return (
        <>
            {/* <h2>Current Theme: {theme}</h2> */}
            <ThemeStatus />
            <button onClick={()=>{
              setTheme((prevtheme)=>
                prevtheme === "light" ? "dark" : "light"
              )
            }}>Toggle Theme</button>

            <hr /><hr />

            <Add 
            editingProduct={editingProduct} 
            setEditingProduct = {setEditingProduct}
            fetchProducts={fetchProducts}/>
            <hr /><hr />
            <br />

            {isLoadingProducts ? (
              <p>Loading Products....</p>
            ) : (
              <Products 
            products={products}
            setProduct = {setProduct}
            setEditingProduct={setEditingProduct} 
            fetchProducts = {fetchProducts}
            />
            )}
        </>
    );
}

export default App;