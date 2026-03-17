import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Products(){

const [sneakers,setSneakers] = useState([])
const navigate = useNavigate()

useEffect(()=>{

axios.get("http://localhost:5000/sneakers")
.then(res=>{
setSneakers(res.data)
})

},[])

const addToCollection = (sneaker) => {

let collection = JSON.parse(localStorage.getItem("collection")) || []

collection.push(sneaker)

localStorage.setItem("collection",JSON.stringify(collection))

navigate("/collection")

}

const addToWishlist = (sneaker) => {

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

wishlist.push(sneaker)

localStorage.setItem("wishlist",JSON.stringify(wishlist))

navigate("/wishlist")

}

return(

<div className="container">

<h2>Products</h2>

{sneakers.map((s,index)=>(
<div className="card" key={index}>

<img src={s.image} alt={s.name}/>

<h3>{s.name}</h3>
<p>{s.brand}</p>
<p>${s.price}</p>

<button className="btn-add" onClick={()=>addToCollection(s)}>
Add Sneaker
</button>

<button className="btn-wish" onClick={()=>addToWishlist(s)}>
Wishlist
</button>

</div>
))}

</div>
)

}

export default Products