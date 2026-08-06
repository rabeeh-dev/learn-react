import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <div className="Navbar">
            <Link to="/">Home</Link><hr />
            <Link to="/profile">Profile</Link><hr />
            <Link to="/settings">Settings</Link><hr /><hr />
        </div>
        </>
    )
}

export default Navbar