import React from 'react'
import ChildB from './ChildB';
const ChildA =({ trail })=>{
    console.log(trail)
    return(
        <div>
            <h1>childA</h1>
            <ChildB trail={trail}/>
        </div>
    )
}
export default ChildA;