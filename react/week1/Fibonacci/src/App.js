import React, { useState } from "react";
import "./App.css";

export function Counter() {
  const [counterState, setCounterState] = useState([0, 1]);
  const increment = () => {
    setCounterState((previous) => {
      const lastNumber = previous[previous.length - 1];
      const secondLastNumber = previous[previous.length - 2];
      const nextFibonacci = lastNumber + secondLastNumber;
      return [...previous, nextFibonacci];
    });
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
