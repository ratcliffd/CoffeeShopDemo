import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
