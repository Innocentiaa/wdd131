const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburgerBtn.textContent = hamburgerBtn.textContent === "X" ? "☰" : "X";
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: " Accra Ghana Temple ",
        location: " Accra, Ghana",
        dedicated: "2004, January, 11 ",
        area: 17500 ,
        imageUrl:
        " https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg "
    },
    {
        templeName: "Atlanta Georgia Temple ",
        location: " Atlanta, Georgia",
        dedicated: "1983, June, 4 ",
        area: 34500 ,
        imageUrl:
        " https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg "
    },
    {
        templeName: " Birmingham Alabama Temple ",
        location: "Birmingham, Alabama ",
        dedicated: "2000, September, 3 ",
        area: 10700 ,
        imageUrl:
        " https://churchofjesuschristtemples.org/assets/img/temples/birmingham-alabama-temple/birmingham-alabama-temple-21774-main.jpg "
    },
    // Add more temple objects here...
  ];

function createTempleCard(filteredTemples) {
  const container = document.querySelector(".temples");
  container.innerHTML = ""; // Clear the existing content

  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="size">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

// Add event listeners for filters
document.getElementById("filter-old").addEventListener("click", () => {
  const oldTemples = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1900
  );
  createTempleCard(oldTemples);
});

document.getElementById("filter-new").addEventListener("click", () => {
  const newTemples = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() > 2000
  );
  createTempleCard(newTemples);
});

document.getElementById("filter-large").addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  createTempleCard(largeTemples);
});

document.getElementById("filter-small").addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  createTempleCard(smallTemples);
});

document.getElementById("filter-home").addEventListener("click", () => {
  createTempleCard(temples);
});

// Initialize with all temples
createTempleCard(temples);
