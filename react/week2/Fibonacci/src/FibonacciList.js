import React from "react";
export function FibonacciList(prop) {
  //fiboList
  return (
    <div>
      {prop.fiboList.map((number) => (
        <div>{number}</div>
      ))}
    </div>
  );
}
