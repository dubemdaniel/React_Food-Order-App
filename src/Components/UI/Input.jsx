import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}></label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
