import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button className={classes.button}>{props.message}</button>
    );
}

export default Button;