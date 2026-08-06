import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import './UserDetailed.css'
function Detailed(){
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")

    const params = useParams()
    const id = Number(params.id)
    console.log(id)

    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchUser(){
            setLoading(true)
            try{
                const response = await fetch(`https://dummyjson.com/users/${id}`)
                const data = await response.json()
                setData(data)
                console.log(data)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchUser()
    },[id])

    if(loading) return <h1>Loading...</h1>
    if(error) return  <h1>{error}</h1>
    if (!data) return null;

    return(
       <>
       <div>
        <hr />
        <h1>User Detailed Page</h1>
        <hr />
        <div>
            <div className="img">
                <img src={data.image} alt="" />
            </div>
            <p>Name : {data.firstName}</p>
             <p>Age : {data.age}</p>
              <p>DOB : {data.birthDate}</p>
              <p>Email : {data.email}</p>
              <p>Phone : {data.phone}</p>
        </div>
        <br /><br /><br />
        <button onClick={()=>{
            navigate(-1)
        }}>Back to Users</button>
       </div>
       </>
    )
}

export default Detailed