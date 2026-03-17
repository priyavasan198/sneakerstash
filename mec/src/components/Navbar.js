import { Link } from "react-router-dom"

function Navbar(){
return(

<div className="navbar">

<Link to="/">Home</Link> | 
<Link to="/about">About</Link> | 
<Link to="/contact">Contact</Link> | 
<Link to="/login">Login</Link> | 
<Link to="/register">Register</Link> | 
<Link to="/dashboard">Dashboard</Link> | 
<Link to="/add">Add Sneaker</Link> | 
<Link to="/collection">View Collection</Link> | 
<Link to="/wishlist">Wishlist</Link> |
<Link to="/products">Products</Link> |
<Link to="/profile">Profile</Link>
</div>

)
}

export default Navbar