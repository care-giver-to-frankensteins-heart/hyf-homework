import React from "react";
import "./App.css";

const step = ([x, y]) => [y, x + y];

const Fibonacci = () => {
  const [pair, setNext] = React.useState([0, 1]);

  return (
    <div>
      <button onClick={() => setNext(step(pair))}>{pair[0]}</button>
    </div>
  );
};

export const App = () => <Fibonacci></Fibonacci>;
