import React from "react";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";

const Cart = (props) => {
  const randomKey = Math.random();
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[{ id: "c1", name: "sushi", price: 73.44, amount: 2 }].map((item) => (
        <li key={randomKey}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={style.total}>
        <span> Total Amount</span>
        <span>64.74</span>
      </div>
      <div className={style.action}>
        <button className={style["button--alt"]}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
