import React, { useState } from "react";

const UserInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={(e)=>handleChange(e)} value={value} />
      <p>userInput : {value}</p>
    </div>
  );
};

export default UserInput;
