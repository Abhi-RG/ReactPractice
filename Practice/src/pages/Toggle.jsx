import React,{useState} from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{toggle ? "On" : "Off"}</p>
    </div>
  );
};

export default Toggle;
