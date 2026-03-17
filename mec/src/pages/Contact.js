import { useState } from "react"

function Contact(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")

const handleSubmit = () => {

alert("Message Sent!")

setName("")
setEmail("")
setMessage("")

}

return(

<div className="center-box">
  <div className="box">

    <h2>Contact Us</h2>

    <p>Have questions? Reach out to us!</p>

    <input
      placeholder="Your Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    /><br/><br/>

    <input
      placeholder="Your Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    /><br/><br/>

    <textarea
      placeholder="Your Message"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
    /><br/><br/>

    <button onClick={handleSubmit}>Send</button>

    <hr/>

    <p><b>Email:</b> support@sneakerstash.com</p>
    <p><b>Phone:</b> XXX-XX-XX-XXX</p>
    <p><b>Location:</b> Tamil Nadu, India</p>

  </div>
</div>

)

}

export default Contact