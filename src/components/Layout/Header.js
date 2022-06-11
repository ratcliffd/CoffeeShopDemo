import React from "react";
import { Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

import LocationPage from "../Pages/LocationPage";
import HomePage from "../Pages/HomePage";
import OrderPage from "../Pages/OrderPage";
import MenuPage from "../Pages/MenuPage";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="orderPage">
            <li>Order</li>
          </Link>
          <Link to="menuPage">
            <li>Menu</li>
          </Link>
          <Link to="locationPage">
            <li>Location</li>
          </Link>
        </ul>
      </nav>

      <HeaderCartButton />

      <Routes>
        <Route path="orderPage" element={<OrderPage />} />
        <Route path="menuPage" element={<MenuPage />} />
        <Route path="locationPage" element={<LocationPage />} />
      </Routes>
    </div>
  );
};

export default Header;
