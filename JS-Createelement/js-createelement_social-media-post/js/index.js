console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function postCreate() {
  const post = document.createElement("article"); 
  post.classList.add("post"); 

  const contentPost = document.createElement("p");
  contentPost.classList.add("post__content");
  contentPost.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  const footer2 = document.createElement("footer"); 
  footer2.classList.add("post__footer"); 

  const username = document.createElement("span");
  username.classList.add("post__username"), 
  username.textContent = "@username"; 

  const button = document.createElement("button"); 
  button.classList.add("post__button"); 
  button.textContent = "♥ Like"; 

  button.addEventListener("click", () => {
    button.classList.toggle("post__button--liked");
  });

  footer2.appendChild(username); 
  footer2.appendChild(button);
  post.appendChild(contentPost); 
  post.appendChild(footer2);

  document.body.appendChild(post);

}

postCreate();