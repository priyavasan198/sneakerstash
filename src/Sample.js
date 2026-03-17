import React from 'react'
const Sample = ({test }) =>{
    console.log(test)
    return(
        <>
        <h1>Sample</h1>
         <p> {test[0].fruit}</p>
            <p> {test[0].colour}</p>
            <p> {test[0].price}</p>
        
        </>
    )
}
export default Sample