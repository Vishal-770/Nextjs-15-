"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-evenly items-center h-71">
      count:{count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Counter;
