import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    alert("Button wurde geklickt!");
  };

  return <Button text="Hallo" color="blue" onClick={handleClick} />;
}

const Button = ({ color, disabled, text, onClick }) => {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};