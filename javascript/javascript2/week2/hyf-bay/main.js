console.log("Script loaded");

const products = getAvailableProducts();
products.sort((a, b) => (a.price > b.price ? 1 : -1));

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
    const filterByName = products.filter((pro) =>
      pro.name.toLowerCase().includes(userInput.value)
    );
    document.querySelector("ul").innerHTML = "";
    renderProducts(filterByName);
  } else {
    document.querySelector("ul").innerHTML = "";
    renderProducts(products);
  }
});

const userInput2 = document.getElementById("price-box");
userInput2.addEventListener("keyup", function () {
  if (userInput2.value !== "") {
    const filterbyPrice = products.filter(
      (pro) => pro.price <= parseInt(userInput2.value)
    );
    document.querySelector("ul").innerHTML = "";
    renderProducts(filterbyPrice);
  } else {
    document.querySelector("ul").innerHTML = "";
    renderProducts(products);
  }
});
