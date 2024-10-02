import React, { useState } from "react";
import "./styles.css";

export default function App() {
  /* let count = 0; */
  const [Count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>{Count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(Count - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(Count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
