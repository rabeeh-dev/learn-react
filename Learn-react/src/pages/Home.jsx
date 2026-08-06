import { Link } from "react-router-dom"
import products from "../data/products"
import Products from "../components/Products"

function Home(){
    return(
        <>
        <h1>Home page</h1>
            {/* <Link to="/products/1">Phone</Link><hr />
            <Link to="/products/2">Laptop</Link><hr />
            <Link to="/products/3">Watches</Link>       */}

            {products.map(el =>{
               return <Link key={el.id} to={`/products/${el.id}`}>{el.name}</Link>
            })}

            <Products/>
            

        </>
    )
}

export default Home