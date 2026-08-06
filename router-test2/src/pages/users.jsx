import { Route,Routes,Link } from "react-router-dom"
function Users(){
    return(
        <>
       <h1>Users</h1>
       <Link to={'/users/1'}>Rabeeh</Link>
       <Link to={'/users/2'}>John</Link>
       <Link to={'/users/3'}>Sara</Link>
        </>
    )
}
export default Users