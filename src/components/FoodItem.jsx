import React, { useState } from "react";

import Items from "./Items";
const FoodItem = ({ FoodItem }) => {
  const [activeItem, setActiveItem] = useState([]);
  const onBuyButton = (event, item) => {
    let newItems = [...activeItem, item];
    setActiveItem(newItems);
    console.log(activeItem);
  };
  return (
    <div>
      <ul className="list-group">
        {FoodItem.map((item) => ( 
          <Items
            key={item}
            item={item}
            bought={activeItem.includes(item)}
            handleBuyBtn={(event) => onBuyButton(event, item)}
          ></Items>
        ))}
      </ul>
    </div>
  );
};

export default FoodItem;
