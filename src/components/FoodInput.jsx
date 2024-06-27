import React from "react";
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        className={styles.inputTxt}
        type="text"
        placeholder="enter the your item.."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default FoodInput;
