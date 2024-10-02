import { useState } from "react";
import "./styles.css";

export default function App() {
  /* let isActive = false; */
  const [isActive, setisActive] = useState(false);

  function handleClick() {
    setisActive(!isActive);
    /* isActive = !isActive; */
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
