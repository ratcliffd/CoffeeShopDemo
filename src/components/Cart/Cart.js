import { useDispatch, useSelector } from "react-redux";
import CartModal from "../UI/CartModal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";
import { uiActions } from "../../store/ui-slice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const cartItemsArray = (
    <ul>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
        />
      ))}
    </ul>
  );

  return (
    <CartModal onClick={toggleCartHandler}>
      {cartItemsArray}
      <div>
        <span className={classes.total}>Total Amount: </span>
        <span className={classes.totalAmount}>{totalAmount}</span>
      </div>
      <div>
        <button onClick={toggleCartHandler} className={classes.button}>
          close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </CartModal>
  );
};

export default Cart;
