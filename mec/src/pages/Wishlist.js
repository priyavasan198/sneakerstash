import { useEffect, useState } from "react"

function Wishlist(){

const [wishlist,setWishlist] = useState([])

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("wishlist")) || []
setWishlist(data)

},[])

return(

<div className="container">

<h2>My Wishlist</h2>

{wishlist.length === 0 ? (
<p>No sneakers in wishlist</p>
) : (

wishlist.map((s,index)=>(
<div className="card" key={index}>

<img src={s.image} alt={s.name}/>

<h3>{s.name}</h3>
<p>Brand: {s.brand}</p>
<p>Size: {s.size}</p>
<p>Price: ${s.price}</p>

</div>
))

)}

</div>

)

}

export default Wishlist