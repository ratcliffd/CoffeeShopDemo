import React from "react";

import classes from "./DrinkItems.module.css";

const DrinkItems = (props) => {

    

    return(
        
       <li className={classes.eachListItem}>
            <div className={classes.drinkBox}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h5>{props.price}</h5> 
                <button className={classes.button}>Add Item To Cart</button>              
            </div>
       </li>
    
    );
}

export default DrinkItems;