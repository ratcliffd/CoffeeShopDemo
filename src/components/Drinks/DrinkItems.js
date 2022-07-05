
import classes from "./DrinkItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const DrinkItems = (props) => {
  const dispatch = useDispatch();

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: props.name,
        price: props.price,
      })
    );
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
