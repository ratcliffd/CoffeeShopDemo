import React from "react";
import AvaliableDrinks from "../Drinks/AvaliableDrinks";
import Header from "../Layout/Header";

const MenuPage = () => {
  return (
    <React.Fragment>
      <Header />
      <AvaliableDrinks />
    </React.Fragment>
  );
};

export default MenuPage;
