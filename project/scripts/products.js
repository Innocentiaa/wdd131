const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const products = [
  { id: 1, name: "Laptop", price: 800, description: "High-performance laptop for work and gaming.", image: "./images/laptop.jpg" },
  { id: 2, name: "Smartphone", price: 600, description: "Latest smartphone with powerful features.", image: "./images/phone.png" },
  { id: 3, name: "Smart TV", price: 500, description: "55-inch 4K UHD Smart TV with HDR.", image: "./images/tv.jpg" },
  { id: 4, name: "Shoe", price: 80, description: "Comfortable and stylish shoe.", image: "./images/shoe.jpg" },
  { id: 5, name: "Blender", price: 50, description: "Durable blender for your kitchen needs.", image: "./images/blender.jpg" },
  { id: 6, name: "Toy Car", price: 25, description: "Exciting toy car for kids.", image: "./images/toy.jpg" },
  { id: 7, name: "Body Lotion", price: 15, description: "Moisturizing lotion for smooth skin.", image: "./images/lotion.jpg" },
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product-card";
  productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(productDiv);
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) {
    alert("Product not found!");
    return;
  }
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart); // Debugging line
  alert(`${product.name} added to cart!`);
  updateCartCount();
}

updateCartCount(); // Initialize cart count on page load
