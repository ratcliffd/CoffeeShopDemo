import React, { useContext } from "react";
import CartModal from "../UI/CartModal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <CartModal onClick={props.onClick}>
      {cartItems}
      <div>
        <span className={classes.total}>Total Amount: </span>
        <span className={classes.totalAmount}>{totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClick} className={classes.button}>close</button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </CartModal>
  );
};

export default Cart;
