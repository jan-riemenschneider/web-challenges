import "./styles.css";

export default function App() {
  return <Greeting name="Coach" />;
}

function Greeting({ name }) {
  return <h1>“Hello, {name}!” </h1>;
}

// react komp werden immer groß geschrieben !!