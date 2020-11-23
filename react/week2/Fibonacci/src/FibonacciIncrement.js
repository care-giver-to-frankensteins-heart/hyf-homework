import React from "react";
export function FibonacciIncrement(prop) {
  const increment = () => {
    prop.setFiboList((previous) => {
      // calling back to his parent
      const lastNumber = previous[previous.length - 1];
      const secondLastNumber = previous[previous.length - 2];
      const nextFibonacci = lastNumber + secondLastNumber;
      return [...previous, nextFibonacci];
    });
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  );
}
