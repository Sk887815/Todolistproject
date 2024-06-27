import React from "react";

const Error = ({ FoodItem }) => {
  return <>{FoodItem.length == 0 && <h3> i am still hungry.</h3>}</>;
};

export default Error;
