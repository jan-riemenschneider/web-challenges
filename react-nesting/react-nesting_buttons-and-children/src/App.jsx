import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Button1</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
