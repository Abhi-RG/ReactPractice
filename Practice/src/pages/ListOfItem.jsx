import React from "react";

const ListOfItem = () => {
  const list = ["item1", "item1", "item1", "item1", "item1"];
  return (
    <ul>
      {list.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListOfItem;
