/* console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img"); 
    star.src = "assets/star-empty.svg"; 
    starContainer.append(star); 
  }
}
renderStars();
 */

/* console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");  
    
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg";  
    } else {
      star.src = "assets/star-empty.svg";  
    }

    starContainer.append(star); 
  }
}
renderStars(2); */

console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");  
    
    star.addEventListener("click", () => {
      star.classList.toggle("filled"); 
      if (star.classList.contains("filled")) {
        star.src = "assets/star-filled.svg";
      } else {
        star.src = "assets/star-empty.svg";
      }
    });

    starContainer.append(star); 
  }
}
renderStars(); 


