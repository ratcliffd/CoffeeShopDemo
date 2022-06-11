import React from "react";

const DrinkItems = (props) => {

    return(
       <li>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{props.price}</div>                
            </div>
       </li>
    );
}

export default DrinkItems;