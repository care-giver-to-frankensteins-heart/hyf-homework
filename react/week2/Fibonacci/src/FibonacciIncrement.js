import React from "react";
export function FibonacciIncrement(prop) {
  const increment = () => {
    prop.setFiboList((previous) => {
      const fibSequence = [...previous];
      //on click renders and displays next 10 fibonacci numbers
      for (let i = previous.length; i < previous.length + 10; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
      }
      return [...fibSequence];
    });
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  );
}
