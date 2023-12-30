let calculation = localStorage.getItem("calculation") || "";

updateCalculationMessage();

function updateCalculation(value) {
  calculation += value;
  updateCalculationMessage();
}

localStorage.setItem("calculation", calculation);

function updateCalculationMessage() {
  document.querySelector(".js-message").innerHTML = calculation;
}