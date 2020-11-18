import React, { useState } from "react";

export function Counter() {
  const [counterState, setCounterState] = useState([0, 1]);
  // ... some code here
  const increment = () => {
    const lastNumber = counterState[counterState.length - 1];
    const secondLastNumber = counterState[counterState.length - 2];
    const fibonacci = lastNumber + secondLastNumber;
    setCounterState([...counterState, fibonacci]);
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
