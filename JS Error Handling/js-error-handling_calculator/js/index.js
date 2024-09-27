console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      if (b === 0) {
        throw new Error("Division durch 0 ist nicht erlaubt!");
      }
      return a / b;
    } catch (error) {
      document.querySelector(".error").textContent = error.message;
      return 0;
    }
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;

  // Hier den Fehler abfangen, falls die Operation nicht erfolgreich ist
  const result = operations[operation](firstNumber, secondNumber);
  if (result !== null) {
    output.innerText = result;
  }
});