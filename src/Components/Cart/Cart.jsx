import React from "react";
import Modal from "../UI/Modal";
import style from "./Cart.module.css";

const Cart = (props) => {
  const randomKey = Math.random();
  const cartItemWrapper = [
    { id: "c1", name: "sushi", price: 73.44, amount: 2 },
  ];
  const cartItems = (
    <ul className={style["cart-items"]}>
      {cartItemWrapper.map((item) => (
        <li key={randomKey}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onRemoveCart={props.onRemoveCart}>
      {cartItems}
      <div className={style.total}>
        <span> Total Amount</span>
        <span>64.74</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onRemoveCart}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
