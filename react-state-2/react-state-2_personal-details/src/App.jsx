import React from "react";
import "./styles.css";
import Form from "./components/Form";

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateUser = () => {
    setName();
    setEmail();
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">John doe</span>
      </p>
      <p>
        Email: <span className="output">John@Doe.com</span>
      </p>
    </div>
  );
}
