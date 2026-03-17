import React  from "react";
//import { useEffect } from "react";
import { useState } from "react" ;
import './Dependency.css'
const Dependency =() => {
    
    const [count,setCount] = useState(false)
   // const [val,setVal]= useState(0)
    //useEffect(() => {},[])
    //useEffect(() => { console.log("test")},[val])
    //useEffect(() => { console.log("every")})
    return(
        <>
        <button className="btn-style" onClick={() => setCount(!count)}>...</button>
        {count &&
        <div className="banner">
            <span>Document</span>
            <span>Archieved release</span>
        </div>
        }
        </>
    )

} 
export default Dependency