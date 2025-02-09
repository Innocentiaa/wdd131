const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


// Populate product dropdown
const productSelect = document.getElementById("product2");
products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Track submissions
if (window.location.pathname.endsWith("review.html")) {
  let count = localStorage.getItem("reviewCount") || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  document.body.innerHTML = `<h1>Thank you for your review!</h1><p>You have submitted ${count} reviews.</p>`;
}