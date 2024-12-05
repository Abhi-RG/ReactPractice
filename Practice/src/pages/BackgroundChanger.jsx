import React, { useState } from "react";

const BackgroundChanger = () => {
  const [background, setBackground] = useState("white");
  const onClick = () => {
    let newColor = background === "white" ? "yellow" : "white";
    setBackground(newColor);
  };
  return (
    <div onClick={onClick}>
      <button style={{ background }}>Click Me to Change Background</button>
    </div>
  );
};

export default BackgroundChanger;
