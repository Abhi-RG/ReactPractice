import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(5);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);
  return <div>TimeLeft:{time} seconds</div>;
};

export default Timer;
