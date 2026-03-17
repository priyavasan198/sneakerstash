import React, { useState } from "react";
import "./Two.css";

function Two() {

  const [item, setItem] = useState({
    id: 1,
    title: "Wireless Mouse",
    price: 500,
    qty: 1
  });

  const [isMember, setIsMember] = useState(true);

  const { title, price, qty } = item;

  function increase() {
    setItem({
      ...item,
      qty: item.qty + 1
    });
  }

  function decrease() {
    if (item.qty > 1) {
      setItem({
        ...item,
        qty: item.qty - 1
      });
    }
  }

  function toggleMember() {
    setIsMember(!isMember);
  }

  return (
    <div className="box">
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>

      <div className="buttons">
        <button onClick={decrease}>-</button>
        <span>{qty}</span>
        <button onClick={increase}>+</button>
      </div>

      {qty > 5 && <p className="free">Free Shipping!</p>}

      <p>
        Final Price: ₹
        {isMember ? (price * 0.9).toFixed(0) : price}
      </p>

      <button onClick={toggleMember}>
        Toggle Membership
      </button>
    </div>
  );
}

export default Two;