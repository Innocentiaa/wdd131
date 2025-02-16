const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;


function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDiv = document.getElementById("cart-items");
    cartDiv.innerHTML = "";
    cartItems.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      `;
      cartDiv.appendChild(itemDiv);
    });
  }
  
  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  function checkout() {
    alert("Checkout successful!");
    localStorage.removeItem("cart");
    renderCart();
  }
  
  renderCart();
  