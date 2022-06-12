import React from "react";
import AvaliableDrinks from "../Drinks/AvaliableDrinks";
import coffeeDrinks from '../../assets/coffeedrinks.jpg'
import Header from "../Layout/Header";
import classes from "./MenuPage.module.css";

const MenuPage = (props) => {
    return (
        <React.Fragment>
        
        <Header/>
        <div className={classes.backgroundImg}>
        <img src={coffeeDrinks} alt="image of different coffee drinks" /> 
        </div>
        <AvaliableDrinks/>
       
        </React.Fragment>

    );
}

export default MenuPage;