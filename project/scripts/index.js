// Update the year in the footer
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Update the last modified date
const lastModified = document.getElementById("lastModified");
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// Event listener for signup form
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("name").value; // Fixed the field id
    const password = document.getElementById("password").value;

    // Save user data to localStorage
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      alert("Signup successful!");
      redirectToSignupPage(); // Call the callback function
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// Fetch or hardcode product list
const productList = [
  "Laptops",
  "Phones",
  "Electronics",
  "Shoes",
  "Blenders",
  "Toys",
  "Lotions",
];

// Populate the search dropdown with product list
const productDropdown = document.getElementById("product2");
if (productDropdown) {
  productList.forEach((product) => {
    const opt = document.createElement("option");
    opt.value = product.toLowerCase();
    opt.textContent = product;
    productDropdown.appendChild(opt);
  });

  // Search functionality to redirect on product selection
  productDropdown.addEventListener("change", function () {
    const selectedProduct = productDropdown.value;
    if (selectedProduct) {
      window.location.href = `products.html?search=${selectedProduct}`;
    }
  });
}
