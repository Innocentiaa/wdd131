const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
  ];
  
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  }



  //added

  function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-card');

    allProducts.forEach((product) => {
        // Show all products if category is 'all'
        if (category === 'all') {
            product.style.display = 'block';
        } else {
            // Show only products that match the category
            if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });
}

// additional

