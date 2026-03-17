import React from 'react';
function Arrmethod(){
const arr=[1,2,3]
arr.pop();
arr.push(4);
arr.shift();
arr.unshift("hello");
const arr1=[" app "," ban "," che "]
arr1.splice(0,1)
return(
    <>
    <div>
        <p>pop:{arr}</p>
        <p>push:{arr}</p>
        <p>shift:{arr}</p>
        <p>unshift:{arr}</p>
        <p>splice:{arr1}</p>
    </div>
    </>
)
}
export default Arrmethod;