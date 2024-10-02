// ./src/App.js
import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 134,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 123,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 122,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 4,
      name: "🍊Orange",
      color: "orange",
    },
    {
      id: 34,
      name: "🍐Birne",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color}>
          {" "}
        </Card>
      ))}
    </div>
  );
}
