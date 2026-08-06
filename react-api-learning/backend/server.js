import express from 'express';
import cors from "cors"

const app = express()
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
const PORT = 3001

let products = [
  {
    id: 1,
    name: "iPhone",
    price: 80000
  },
  {
    id: 2,
    name: "MacBook",
    price: 150000
  },
  {
    id: 3,
    name: "AirPods",
    price: 25000
  }
];

app.get("/api/products",(req,res)=>{
    res.json(products)
})

app.post("/api/products",(req,res)=>{
    const newProduct = {
        id : products.length+1,
        name : req.body.name,
        price : req.body.price,
    }

    products.push(newProduct)
    res.status(201).json(newProduct)
})

app.delete("/api/products/:id",(req,res)=>{
    const id = Number(req.params.id)

    if(products.find((el)=> el.id === id)){
        products = products.filter((el)=> el.id !== id)
        res.status(200).json(products)
    }else{
        res.status(404).send("Product not found!!")
    }

})

app.put("/api/products/:id",(req,res)=>{
    const id = Number(req.params.id)
    const product = products.find((el)=> el.id === id)
    if(product){
        product.name = req.body.name
        product.price = req.body.price
        res.status(200).json(product)
    }else{
        res.status(404).send("Product not found!")
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})

