const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    console.error("Error accessing cart data:", error);
    return [];
  }
}

function setCart(cart) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart data:", error);
  }
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = getCart().length;
  }
}

function renderCart() {
  const cartDiv = document.getElementById("cart-items");
  if (!cartDiv) {
    console.error("Cart items container not found.");
    return;
  }

  const cartItems = getCart();
  cartDiv.innerHTML = "";

  if (cartItems.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>";
    updateCartCount();
    return;
  }

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      <p>${item.name} - $${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartDiv.appendChild(itemDiv);
  });

  updateCartCount();
}

function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  setCart(cart);
  renderCart();
}

function checkout() {
  if (confirm("Are you sure you want to checkout?")) {
    alert("Checkout successful!");
    localStorage.removeItem("cart");
    renderCart();
  }
}

renderCart();
