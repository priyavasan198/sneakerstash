import React from 'react';
import './Ass.css'

 const Ass = () =>{  

  return (
    <>
    <center>
    <div className='Ass'>
        <h2>Create an account</h2>
        <form>
          <div className='control' >
         <div> 📧<input type="email" placeholder="enter ur email" className="one"/></div><br/>
           <div>🔑<input type="password" placeholder="enter ur password" className="two"/></div><br/>
          <div> < a href="#" className='forgot'>Forgot password?</a></div>
           <div><button type="submit">Login</button></div>
           </div>
        </form>
    </div></center>
    </>
  )
}
export default Ass
