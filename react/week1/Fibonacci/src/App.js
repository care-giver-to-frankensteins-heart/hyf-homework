import React, { useState } from "react";
import "./App.css";

export function Counter() {
  const [counterState, setCounterState] = useState([0, 1]);
  const increment = () => {
    const lastNumber = counterState[counterState.length - 1];
    const secondLastNumber = counterState[counterState.length - 2];
    const nextFibonacci = lastNumber + secondLastNumber;
    setCounterState([...counterState, nextFibonacci]);
  };
  return (
    <div>
      {counterState.map((counter) => (
        <div>{counter}</div>
      ))}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
