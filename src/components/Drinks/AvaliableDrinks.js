import React from "react";

import DrinkItems from "./DrinkItems";
import Card from "../UI/Card";
import classes from "./AvaliableDrinks.module.css";

const DRINK_MENU = [
  {
    id: "d1",
    name: "Latte",
    description: "Espresso drink with warm milk and a light amount of foam.",
    price: 5,
  },
  {
    id: "d2",
    name: "Cappucino",
    description: "Espresso drink with warm milk and a heavy amount of foam.",
    price: 5,
  },
  {
    id: "d3",
    name: "Americano",
    description: "Espresso drink with water",
    price: 3.5,
  },
  {
    id: "d4",
    name: "Hot Chocolate",
    description: "Hot chocolate drink",
    price: 3.5,
  },
];

const AvaliableDrinks = () => {
  const drinkList = DRINK_MENU.map((drinks) => (
    <DrinkItems
      id={drinks.id}
      key={drinks.id}
      name={drinks.name}
      description={drinks.description}
      price={drinks.price}
    />
  ));

  return (
    <section>
      <Card>
        <ul className={classes.avalDrink}>{drinkList}</ul>
      </Card>
    </section>
  );
};

export default AvaliableDrinks;
