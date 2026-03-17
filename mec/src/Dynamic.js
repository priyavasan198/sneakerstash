import React, { useState } from 'react'
const Dynamic = () =>{
    const [data,setData] = useState({
        email:"",
        pass:""
    })
    
    function submit(e) {
        setData({...data,email: e.target.value})
        console.log(data)
}
    return(
        <>
        <form>
            
            email <input type="text" onChange={submit}/>
    pass <input type="text" onChange={(e) => setData({...data,pass: e.target.value})}/>
        </form>
        {data.email}
        {data.pass}
        </>
    )
}
export default Dynamic;