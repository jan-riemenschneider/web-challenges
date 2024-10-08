console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkmodeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightmodeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkmodeButton.addEventListener("click", () => {
    bodyElement.classList.add("dark");
});

lightmodeButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});