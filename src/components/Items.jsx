import React from "react";
import style from "./Container.module.css";
const Items = ({ item, bought, handleBuyBtn }) => {
  return (
    <li
      key={item}
      className={`${style.KgBtn} list-group-item ${bought && "active"}`}
    >
      {item}
      <button onClick={handleBuyBtn} className={`${style.button} btn btn-info`}>
        buy
      </button>
    </li>
  );
};

export default Items;
