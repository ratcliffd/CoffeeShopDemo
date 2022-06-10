import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h2>Derek's Coffee Shop</h2>
      <ul>
        <li a href="./OrderPage.js">
          Order
        </li>
        <li a href="./MenuPage.js">
          Menu
        </li>
        <li a href="./LocationPage.js">
          Location
        </li>
      </ul>
      <HeaderCartButton />
    </div>
  );
};

export default Header;
