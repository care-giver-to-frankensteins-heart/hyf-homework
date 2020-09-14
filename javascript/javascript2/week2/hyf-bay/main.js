console.log("Script loaded");

const products = getAvailableProducts();

products.sort((a, b) => (a.price > b.price ? 1 : -1));

let productsToDisplay = [...products];
let textFilter = "";
let priceFilter = "";

function filterProducts(products) {
  return products.filter((product) => {
    if (textFilter !== "") {
      if (!product.name.toLowerCase().includes(textFilter)) {
        return false;
      }
    }
    if (priceFilter !== "") {
      if (product.price > parseInt(priceFilter)) {
        return false;
      }
    }
    return true;
  });
}

function renderProducts() {
  const listOfProducts = document.createElement("ul");
  listOfProducts.innerHTML = "";
  const main = document.querySelector("main");
  main.appendChild(listOfProducts);
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  productsToDisplay = filterProducts(products);
  document.querySelector("ul").innerHTML = "";
  productsToDisplay.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

const userInput = document.getElementById("products-box");
userInput.addEventListener("keyup", function () {
  textFilter = userInput.value;
  renderProducts();
});

const userInput2 = document.getElementById("price-box");
userInput2.addEventListener("keyup", function () {
  priceFilter = userInput2.value;
  renderProducts();
});

renderProducts();
