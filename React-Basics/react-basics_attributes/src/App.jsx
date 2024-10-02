import "./styles.css";

export default function App() {
  return (
    <article>
      <h2 className="article__title">h2 Element</h2>
      <label htmlFor="input1">Input</label>
      <input id="input1" type="text" />
      <a href="https://de.wikipedia.org/wiki/React" className="article__link"></a>
    </article>
  );
}

