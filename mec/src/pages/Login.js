import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const handleLogin = () => {

axios.post("http://localhost:5000/login",{
email,
password
})
.then((res)=>{

alert(res.data.message)

localStorage.setItem("loggedIn", true)

navigate("/products")

})
.catch(()=>{
alert("Login failed")
})

}

return(

<div className="container">

<h2>Login</h2>

<input
type="email"
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

<button className="btn-add" onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login