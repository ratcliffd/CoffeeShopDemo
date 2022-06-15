import React from "react";
import Header from "../Layout/Header";
import classes from './HomePage.module.css';
import coffeeImage from '../../assets/coffeebackground.jpg';

const HomePage = (props) => {

    return(
        <React.Fragment>
        <Header />
        <div className={classes.HomePage}>
        <span>
        <h1>Welcome to Derek's Coffee Shop</h1>
        </span>
        <div className={classes.coffeeImage}>
            <img src={coffeeImage} alt="a simple cup of coffee"/>
        </div>
        </div>
        </React.Fragment>
    );
}

export default HomePage;