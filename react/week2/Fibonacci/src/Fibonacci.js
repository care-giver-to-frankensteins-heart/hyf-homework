import React, { useState } from "react";
import { FibonacciIncrement } from "./FibonacciIncrement";
import { FibonacciList } from "./FibonacciList";
export function Fibonacci() {
  const [fiboList, setFiboList] = useState([0, 1]);
  return (
    <div>
      <FibonacciIncrement setFiboList={setFiboList} />
      <FibonacciList fiboList={fiboList} />
    </div>
  );
}
