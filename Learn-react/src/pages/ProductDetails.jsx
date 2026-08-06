import { useParams } from "react-router-dom";
import products from "../data/products"
import { useNavigate } from "react-router-dom";

function ProductDetails(){
    const params = useParams()
    const paramid = Number(params.id)
    let product = products.find(pr => pr.id === paramid)
    const navigate = useNavigate()

    return(
        <>
        <br />
        <button onClick={()=> navigate("/")}>Return to homepage</button><br />
        <h1>{product===undefined?"Product not found":product.name}</h1>
        </>
    )
}

export default ProductDetails


