import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(true);

  function change() {
    setCount(!count)
    console.log(count)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count ? "true":"false"}</h1>
      <div className={count ? "box-white" : "box-dark"}></div>
      <button className='btn_Counter' onMouseOver={change}>
        white/black
      </button>
      
    </div>
  );
};

export default Counter;
