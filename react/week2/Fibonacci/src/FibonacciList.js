import React from "react";
export function FibonacciList(prop) {
  //fiboList
  return (
    <div>
      {prop.fiboList.map((number, index) => (
        <div key={index}>{number}</div>
      ))}
    </div>
  );
}
