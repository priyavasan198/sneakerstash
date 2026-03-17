import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import { Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import AddSneaker from "./pages/AddSneaker"
import ViewCollection from "./pages/ViewCollection"
import Wishlist from "./pages/Wishlist"
import Products from "./pages/Products"
function App(){

return(

<Router>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/add" element={<AddSneaker/>}/>
<Route path="/collection" element={<ViewCollection/>}/>
<Route path="/wishlist" element={<Wishlist/>}/>
<Route path="/products" element={<Products/>}/>
</Routes>

</Router>

)

}

export default App