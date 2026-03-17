import { useEffect, useState } from "react"

function ViewCollection(){

const [collection,setCollection] = useState([])

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("collection")) || []
setCollection(data)

},[])

return(

<div className="container">

<h2>My Collection</h2>

{collection.length === 0 ? (
<p>No sneakers added</p>
) : (

collection.map((s,index)=>(
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

export default ViewCollection