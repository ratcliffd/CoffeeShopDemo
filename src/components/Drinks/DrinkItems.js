import React, { useContext, useState, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from "./DrinkItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const DrinkItems = (props) => {
  const dispatch = useDispatch();
  const ctx = useContext(CartContext);
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    addToCartHandler(enteredAmountNumber);
  };



  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: props.name,
        price: props.price,
      })
    );

    // ctx.addItem({
    //   id: props.id,
    //   name: props.name,
    //   amount: amount,
    //   price: props.price,
    // });
  };
  return (
    <li className={classes.eachListItem}>
      <div className={classes.drinkBox}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h5>{price}</h5>

        <button className={classes.button} onClick={addToCartHandler}>
          Add Item To Cart
        </button>
      </div>
    </li>
  );
};

export default DrinkItems;
