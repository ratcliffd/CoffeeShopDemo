import React, {useState} from "react";
import { Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

import LocationPage from "../Pages/LocationPage";
import HomePage from "../Pages/HomePage";
import OrderPage from "../Pages/OrderPage";
import MenuPage from "../Pages/MenuPage";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {


  const [closeCartModal, setCloseCartModal] = useState(false);


  const cartClickHandler = () =>{
    setCloseCartModal(true);
  }
  
  const closeCartClickHandler = () =>{
    setCloseCartModal(false);
  }

  return (

  
    <div className={classes.header}> 
     { closeCartModal && <Cart onClick={closeCartClickHandler}/>}
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="menuPage">
            <li>Menu</li>
          </Link>
          <Link to="locationPage">
            <li>Location</li>
          </Link>
        </ul>
      </nav>

      <HeaderCartButton onClick={cartClickHandler}/>
      

      <Routes>
        <Route path="orderPage" element={<OrderPage />} />
        <Route path="menuPage" element={<MenuPage />} />
        <Route path="locationPage" element={<LocationPage />} />
      </Routes>
    </div>
  );
};

export default Header;
