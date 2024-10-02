import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>Hallo</h1>
      <p>Das hat funktioniert!!</p>
    </article>
  );
}
