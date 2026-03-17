import { useState } from "react"

function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleRegister = () => {

const user = {
name,
email,
password
}

localStorage.setItem("user", JSON.stringify(user))

alert("Registration Successful")

}

return(

<div className="container">

<h2>Register</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button className="btn-add" onClick={handleRegister}>
Register
</button>

</div>

)

}

export default Register