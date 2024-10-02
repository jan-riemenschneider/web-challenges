import "./styles.css";
import { Header } from "./components/Header";
import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <>
      <Header logo={logo} avatar={avatar}></Header>
      <main>content goes here…</main>
    </>
  );
}