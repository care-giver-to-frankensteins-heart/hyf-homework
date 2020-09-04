console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  const listOfProducts = document.createElement("ul");
  const main = document.querySelector("main");
  main.appendChild(listOfProducts);
  const ul = document.querySelector("ul");
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

renderProducts(products);
const userInput = document.getElementById("products-box");

userInput.addEventListener("keyup", function () {
  if (userInput.value !== "") {
    const filteredProducts = products.filter((pro) =>
      pro.name.toLowerCase().includes(userInput.value)
    );
    document.querySelector("ul").innerHTML = "";
    renderProducts(filteredProducts);
  } else {
    document.querySelector("ul").innerHTML = "";
    renderProducts(products);
  }
});
