import React from 'react';
import './Login.css'

 const Login = () =>{  

  return (
    <>
    <center>
    <div className='login'>
        <h2>Sign in with email</h2>
        <p>Access it by login</p>
        <form>
          <div className='control'>
         <div> ✉️<input type="email" placeholder="enter ur email" className="one"/></div><br/>
           <div>🔑<input type="password" placeholder="enter ur password" className="two"/></div><br/>
          <div> < a href="#" className='forgot'>Forgot pwd?</a>
           <button type="submit">Login</button></div>
           </div>
        </form>
    </div></center>
    </>
  )
}
export default Login