import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./HeaderCartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const HeaderCartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  // const numberOfCartItems = items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>Cart: {cartQuantity} </span>
    </button>
  );
};

export default HeaderCartButton;
