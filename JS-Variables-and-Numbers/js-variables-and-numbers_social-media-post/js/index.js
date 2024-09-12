console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

const title = "Wie liest man schneller ?";

const text =
  "Um schneller zu lesen, erfasse Wortgruppen statt einzelner Wörter. Reduziere die innere Stimme beim Lesen.";

let numberLikes = 1000;

const createdName = "Jan";

const isReported = false;
/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

console.log("Titel:", title);
console.log("Text:", text);
console.log("Number:", numberLikes);
console.log("Name:", createdName);
console.log("Reported:", isReported);

numberLikes += 1;

console.log("New Likes:", numberLikes);