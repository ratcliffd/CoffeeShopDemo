import React, { useContext, useState, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from "./DrinkItems.module.css";

const DrinkItems = (props) => {
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

  const addToCartHandler = (amount) => {
    
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.eachListItem}>
      <div className={classes.drinkBox}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h5>{price}</h5>
        <form onSubmit={submitHandler}>
          <button className={classes.button}>Add Item To Cart</button>
          <input
            className={classes.input}
            ref={amountInputRef}
            label="Amount"
            id={"amount" + props.id}
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
          />
        </form>
      </div>
    </li>
  );
};

export default DrinkItems;
