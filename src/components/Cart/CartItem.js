import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: props.name,
        price: props.price,
      })
    );
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
