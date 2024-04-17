console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);
const postSection = document.getElementsByClassName("posts");

function createPost() {
  createSection = document.createElement("section");
  postSection.append(createSection);
  createSection.classList.add("post");

  createParagraph = document.createElement("paragraph");
  createSection.append(createParagraph);
  createParagraph.classList.add("post__content");
  createParagraph.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor";

  createFooter = document.createElement("footer");
  createSection.append(createFooter);
  createFooter.classList.add("post__footer");

  createSpan = document.createElement("span");
  createFooter.append(createSpan);
  createSpan.classList.add("post__username");
  createSpan.textContent = "@DonCamillo53";

  createButton = document.createElement("button");
  createFooter.append(createButton);
  createButton.classList.add("post__button");
  createButton.textContent = "♥ Like";
}

createPost();
// // Exercise:
// // Use document.createElement() and append another social media post to the body.
