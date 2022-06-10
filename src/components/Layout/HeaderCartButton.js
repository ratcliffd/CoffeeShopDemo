import React from "react";

import classes from './HeaderCartButton.module.css'; 

const HeaderCartButton = (props) => {
    return( 

        <button className={classes.button}>
            <span>Items In Cart: </span>
            
        </button>

    );
}

export default HeaderCartButton;