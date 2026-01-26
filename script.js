// script.js

// Select elements
const headerTitle = document.querySelector("header h1");
const mainTitle = document.querySelector("main h1");
const button = document.createElement("button");

// Add button dynamically
button.textContent = "Toggle Highlight";
document.body.appendChild(button);
// Change text
mainTitle.textContent = "Welcome to AI Study Assistant 🚀";

// Change style
mainTitle.style.color = "blue";
mainTitle.style.fontSize = "26px";
button.addEventListener("click", () => {
  console.log("Button clicked!"); // Debugging log
  headerTitle.textContent = "You clicked the button!";
});
button.addEventListener("click", () => {
  mainTitle.classList.toggle("highlight"); // Adds/removes class
});


console.log("Script loaded successfully!");
console.log("Header title:", headerTitle.textContent);
