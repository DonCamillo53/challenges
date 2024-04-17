console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const body = document.querySelector("body");

function createCard(
  name,
  category1,
  category2,
  category3,
  description,
  imageSrc,
  price
) {
  let card = document.createElement("article");
  body.append(card);
  card.setAttribute("class", "product");

  let productBody = document.createElement("div");
  card.append(productBody);
  productBody.setAttribute("class", "product__body");

  let productTextContainer = document.createElement("div");
  productBody.append(productTextContainer);
  productTextContainer.setAttribute("class", "product__text-container");

  let h2 = document.createElement("h2");
  productTextContainer.append(h2);
  h2.setAttribute("class", "product__name");
  h2.textContent = name;

  let ul = document.createElement("ul");
  productTextContainer.append(ul);
  ul.setAttribute("class", "product__categories");

  let li1 = document.createElement("li");
  ul.append(li1);
  li1.setAttribute("class", "product__category");
  li1.textContent = category1;

  let li2 = document.createElement("li");
  ul.append(li1);
  li2.setAttribute("class", "product__category");
  li2.textContent = category2;

  let li3 = document.createElement("li");
  ul.append(li3);
  li3.setAttribute("class", "product__category");
  li3.textContent = category3;

  let paragraph = document.createElement("p");
  productTextContainer.append(paragraph);
  paragraph.setAttribute("class", "product__description");
  paragraph.textContent = description;

  let productImageContainer = document.createElement("div");
  productBody.append(productImageContainer);
  productImageContainer.setAttribute("class", "product__image-container");

  let productImage = document.createElement("img");
  productImageContainer.append(productImage);
  productImage.setAttribute("class", "product__image");
  productImage.setAttribute("src", imageSrc);
  productImage.setAttribute("alt", "Product Picture");

  let cardFooter = document.createElement("footer");
  card.append(cardFooter);
  cardFooter.setAttribute("class", "product__footer");

  let productPrice = document.createElement("span");
  cardFooter.append(productPrice);
  productPrice.setAttribute("class", "product__price");
  productPrice.textContent = price;

  let buyButton = document.createElement("button");
  cardFooter.append(buyButton);
  buyButton.setAttribute("class", "product__buy-button");
  buyButton.setAttribute("type", "button");
  buyButton.textContent = "Buy";
}

createCard(name, category1, category2, category3, description, imageSrc, price);
