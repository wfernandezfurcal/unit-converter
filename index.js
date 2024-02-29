// Unit Converter
/*
Formula
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// Get elements
const inputUnitEl = document.getElementById("unit");
const lenghtPar = document.getElementById("lenghtPar");
const volumePar = document.getElementById("volumePar");
const massPar = document.getElementById("massPar");

//Convert Function
function convert(){
  console.log(inputUnitEl.value);

  //Meter/Feet
  let feet = (inputUnitEl.value * 3.281).toFixed(3);
  let meters = (inputUnitEl.value / 3.281).toFixed(3);
  //Fill paragraph
  lenghtPar.innerText = `${inputUnitEl.value} meters = ${feet} feet | ${inputUnitEl.value} feet = ${meters} meters`;
  
  //Liters/Gallons
  let liters = (inputUnitEl.value * 0.264).toFixed(3);
  let gallons = (inputUnitEl.value / 0.264).toFixed(3);
  //Fill paragraph
  volumePar.innerText = `${inputUnitEl.value} liters = ${liters} gallons | ${inputUnitEl.value} gallons = ${gallons} liters`;
  
  //Kilograms/Pounds
  let kilograms = (inputUnitEl.value * 2.204).toFixed(3);
  let pounds = (inputUnitEl.value / 2.204).toFixed(3);
  //Fill paragraph
  massPar.innerText = `${inputUnitEl.value} kilos = ${feet} pounds | ${inputUnitEl.value} pounds = ${kilograms} kilos`;
}


// Dark mode toggle
const btnTheme = document.querySelector(".btn-theme");

// Determine the current theme mode
const savedMode = localStorage.getItem("mode");
const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches // Check user's system preferences for a mode
  ? "dark"
  : "light";
const currentMode = savedMode || systemMode; // Use the saved mode or system mode

// Set the theme mode based on the current mode
document.documentElement.classList.toggle("dark", currentMode === "dark"); // Set the dark class on the root element if current mode is dark

// Set icons appropriately
btnTheme.classList.toggle("fa-sun", currentMode === "light");
btnTheme.classList.toggle("fa-moon", currentMode === "dark");

// Add an event listener to toggle the theme on click
btnTheme.addEventListener("click", function () {
  btnTheme.classList.toggle("triggered"); // Trigger the rotation animation
  const isDarkMode = document.documentElement.classList.toggle("dark"); // Toggle the dark class on the root element and check if the mode is now dark
  localStorage.setItem("mode", isDarkMode ? "dark" : "light"); // Save the current mode in local storage

  // Toggle the icons
  btnTheme.classList.toggle("fa-sun", !isDarkMode);
  btnTheme.classList.toggle("fa-moon", isDarkMode);
});