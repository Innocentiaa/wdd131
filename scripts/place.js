const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`; 

document.addEventListener("DOMContentLoaded", () => {
    const temperature = 10;
    const windSpeed = 5;

    const calculateWindChill = (temp, speed) => {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    };

    const windChillElement = document.getElementById("windChill");
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
    } 
    else {
        windChillElement.textContent = "NA";
    }
});