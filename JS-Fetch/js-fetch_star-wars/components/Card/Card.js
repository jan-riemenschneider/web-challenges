// --^-- your code here --^--
export function Card(name, eyecolor, birthyear) {
  const card = document.createElement("article"); // Create a new article Element
  card.classList.add("card"); // Add the class 'card'

  // Fill the article element with content.
  const heading = document.createElement("h2");
  heading.textContent = `Name: ${name}`;

  card.append(heading);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = `Eye color: ${eyecolor}`;

  card.append(eyeColor);

  const birthYear = document.createElement("p");
  birthYear.textContent = `Birth Year: ${birthyear}`;

  card.append(birthYear);

  return card;
}
