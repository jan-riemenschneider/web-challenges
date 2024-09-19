console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

for (const lang in languages) {
  
  const option = document.createElement("option");  
  
  option.value = lang;  
 
  option.textContent = languages[lang];  

  select.append(option);

}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

for (const key in nav) {

  const element = document.createElement("li");
  const atag = document.createElement("a"); 

  atag.textContent = nav[key].text;
  atag.href = nav[key].href; 

  element.append(atag);
  ul.append(element); 

}

// --^-- write/change code here --^--
