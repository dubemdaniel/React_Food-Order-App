import React from "react";
import Input from "../../UI/Input";
import style from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form action="#" className={style.form}>
      <Input
        label="amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
