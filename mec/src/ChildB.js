import React from 'react'

const ChildB =({ trail })=>{
   

    return(
        <div>
            <h1>childB</h1>
            <p>name:{trail.name}</p>
            <p>place:{trail.place}</p>
            <p>roll:{trail.roll}</p>

           
        </div>
    )
}
export default ChildB