import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <h1>Dubem-Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="Delicious meal on a Table" />
      </div>
    </>
  );
};

export default Header;
