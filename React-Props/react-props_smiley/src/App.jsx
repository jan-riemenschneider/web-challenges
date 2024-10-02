import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  if (isHappy == true) {
    return <h1>😀</h1>;
  } else if (isHappy == false) {
    return <h1>🙁</h1>;
  }
}

// Alternativ isHappy ? "😀" : "🙁"
