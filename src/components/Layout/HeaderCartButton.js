import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const ctx = useContext(CartContext);

  const { items } = ctx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Cart: {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
