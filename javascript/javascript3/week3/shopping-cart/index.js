// Product represents products. ShoppingCart represents a shopping cart.

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

  // Depending on the provided currency return the correct price for the product.
  convertToCurrency(currency) {
      if(!currency) return 0;
      switch (currency) {
          case "dollar":
              return this.price * 0.15;
          case "euro":
              return this.price * 0.13;
          case "korean won":
              return this.price * 183.57;
         default:
             return this.price;
      }
  }
}


class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        // should add a product to the products array
        this.products.push(product);
    }

    removeProduct(product) {
        // should remove a product from the products array
        if (this.products.includes(product)) {
            const index = this.products.indexOf(product);
            this.products.splice(index, 1);
        }
    }

    searchProduct(productName) {
        // should return an array of product that match the productName parameter
        const searchedProducts = this.products.filter(product => 
            product.name.toLowerCase().includes(productName.toLowerCase())
        );
        return searchedProducts;
    }

    getTotal() {
        // should get the total price of the products in the shoppingcart
        return this.products
        .map(product => product.price)
        .reduce((sum, price) => sum + price, 0);
    }

    renderProducts() {
     // should render the products to html. You decide what to show and how
    // Also render the username and the total price of the products in the shoppingcart
    const shoppingCart = document.getElementById("shopping-cart");

    const total = document.createElement("h3");
    total.innerHTML = `Total price: ${this.getTotal()} kr`;
    shoppingCart.appendChild(total);

    const ul = document.createElement("ul");
    shoppingCart.appendChild(ul);
    this.products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${product.name}</span>: <span>${product.price} kr</span>`;
        ul.appendChild(li);
    });
    }

    getUser() {
        // should return a promise with the data from this api:
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(user => {
            const shoppingCart = document.getElementById("shopping-cart");
            const userName = document.createElement('h3');
            userName.innerHTML = `User: ${user.username}`;
            shoppingCart.appendChild(userName);
        })
        .then(() => this.renderProducts())
        .catch(error => console.log(error));
    }
}

const flatscreen = new Product('Flat-screen', 5000);
const samsungTv = new Product('Samsung TV', 3000);
const sonyTv = new Product('Sony TV', 5500);
const lgTv = new Product('LG TV', 2500);

const shoppingCart = new ShoppingCart([flatscreen, samsungTv, sonyTv]);

shoppingCart.getUser();
shoppingCart.addProduct(lgTv);
shoppingCart.removeProduct(lgTv);
shoppingCart.renderProducts();

document.getElementById("search").addEventListener("input", () => {
    const input = document.getElementById("search");
    const productName = input.value;
    
    const divSearch = document.getElementById("search-results");
    divSearch.innerHTML = "";
    if (productName) {
        const ulSearch = document.createElement("ul");
        divSearch.appendChild(ulSearch);
        shoppingCart.searchProduct(productName).forEach(product => {
            const liSearch = document.createElement("li");
            liSearch.innerHTML = `<span>${product.name}</span>: <span>${product.price} kr</span>`;
            ulSearch.appendChild(liSearch);
        });
    }
});

// Assuming dkr as default currency
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollar")); //7.5
console.log(plant.convertToCurrency("euro")); //6.5
console.log(plant.convertToCurrency("korean won"));//9178.5
console.log(plant.convertToCurrency("bla")); // No such currency(50kr)
console.log(110*plant.convertToCurrency()); // No such currency (0)