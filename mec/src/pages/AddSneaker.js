import { useState } from "react"

function AddSneaker(){

const [name,setName] = useState("")
const [brand,setBrand] = useState("")
const [size,setSize] = useState("")
const [price,setPrice] = useState("")

const handleAdd = () => {

const newSneaker = {
  name,
  brand,
  size,
  price,
  image: "https://static.nike.com/a/images/t_default/air-force-1.jpg" // default image
}

const oldCollection = JSON.parse(localStorage.getItem("collection")) || []


oldCollection.push(newSneaker)


localStorage.setItem("collection", JSON.stringify(oldCollection))

alert("Sneaker Added!")

}

return(

<div className="center-box">
  <div className="box">

    <h2>Add Sneaker</h2>

    <input
      placeholder="Name"
      onChange={(e)=>setName(e.target.value)}
    /><br/><br/>

    <input
      placeholder="Brand"
      onChange={(e)=>setBrand(e.target.value)}
    /><br/><br/>

    <input
      placeholder="Size"
      onChange={(e)=>setSize(e.target.value)}
    /><br/><br/>

    <input
      placeholder="Price"
      onChange={(e)=>setPrice(e.target.value)}
    /><br/><br/>

    <button onClick={handleAdd}>Add Sneaker</button>

  </div>
</div>

)

}

export default AddSneaker