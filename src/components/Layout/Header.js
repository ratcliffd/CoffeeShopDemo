import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const [closeCartModal, setCloseCartModal] = useState(false);

  const cartClickHandler = () => {
    setCloseCartModal(true);
  };

  const closeCartClickHandler = () => {
    setCloseCartModal(false);
  };

  return (
    <div className={classes.header}>
      {showCart && <Cart onClick={closeCartClickHandler} />}
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/menuPage">
            <li>Menu</li>
          </Link>
        </ul>
      </nav>
      <HeaderCartButton />
    </div>
  );
};

export default Header;
