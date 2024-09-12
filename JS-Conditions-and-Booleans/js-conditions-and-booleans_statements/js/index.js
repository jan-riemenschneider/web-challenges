console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD == receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}
// Part 2: Even / Odd
const number = 2;

if (number === 6) {
  console.log(number);
} else {
  console.log(number + 2);
}

// Part 3: Hotdogs
const numberOfHotdogs = 10;

if (numberOfHotdogs <= 5) {
  console.log(2 * numberOfHotdogs, "Euro");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs <= 100) {
  console.log(1.5 * numberOfHotdogs, "Euro");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs <= 1000000)
  console.log(1 * numberOfHotdogs, "Euro");
else if (numberOfHotdogs > 1000000) console.log(0.1 * numberOfHotdogs, "Euro");

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement); 

// Part 5: Greeting
const userName = "Ben";

const greeting = userName == "Archibald" ? "Hello Coach!" : "Hello" + userName ;

console.log(greeting);
