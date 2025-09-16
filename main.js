import { findFactorial } from "./math.js";

function displayValue(event) {
  event.preventDefault();
  const num = document.getElementById("number-input-user").value;

    const result = findFactorial(num);
    const divOutput = document.getElementById('divOutput');
    divOutput.innerText = result;
}   

const calform = document.getElementById("calform");
calform.addEventListener("submit", displayValue);
