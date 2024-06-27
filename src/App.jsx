import React from "react";
import FoodItem from "./components/FoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Error from "./components/Error";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

const App = () => {
  const [FoodItems, setFoodItems] = useState([]);

  const OnKeyDownEnter = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...FoodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <Error FoodItem={FoodItems}></Error>
        <FoodInput handleKeyDown={OnKeyDownEnter}></FoodInput>
        <FoodItem FoodItem={FoodItems}></FoodItem>
      </Container>
    </>
  );
};

export default App;
