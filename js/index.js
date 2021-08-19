// ELEMENT SELECTORS
const form = document.getElementById("converter");
const convertIcon = document.getElementById("convert-symbol");
const error = document.getElementById("error-div");

// 'FROM' ELEMENTS
const inSelect = document.getElementById("from-select");
const input = document.getElementById("from-unit");

// 'TO' ELEMENTS
const outSelect = document.getElementById("to-select");
const output = document.getElementById("to-unit");

// CONVERSION FUNCTIONS
const celsiusToFahrenheit = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = numVal * 1.8 + 32;

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const celsiusToKelvin = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = numVal + 273.15;

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const FahrenheitToCelsius = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = numVal - 32 / 1.8;

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const fahrenheitToKelvin = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = (numVal - 32) / 1.8 + 273.15;

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const KelvinToCelsius = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = numVal - 273.15;

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const KelvinToFahrenheit = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = (numVal - 273.15) * 1.8 + 32;

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};

// CHECK SELECT VALUES AND RUN DESIRED FORMULA
const runConversion = () => {
  if (inSelect.value === `in-celsius` && outSelect.value === `out-fahrenheit`) {
    celsiusToFahrenheit(input.value);
  } else if (
    inSelect.value === `in-celsius` &&
    outSelect.value === `out-kelvin`
  ) {
    celsiusToKelvin(input.value);
  } else if (
    inSelect.value === `in-fahrenheit` &&
    outSelect.value === `out-celsius`
  ) {
    FahrenheitToCelsius(input.value);
  } else if (
    inSelect.value === `in-fahrenheit` &&
    outSelect.value === `out-kelvin`
  ) {
    fahrenheitToKelvin(input.value);
  } else if (
    inSelect.value === `in-kelvin` &&
    outSelect.value === `out-celsius`
  ) {
    KelvinToCelsius(input.value);
  } else if (
    inSelect.value === `in-kelvin` &&
    outSelect.value === `out-fahrenheit`
  ) {
    KelvinToFahrenheit(input.value);
  } else {
    output.innerHTML = `Check units`;
    showError(`Please check your units`);
    setTimeout(removeError, 3000);
  }
};

const showError = (message) => {
  error.innerHTML = message;
};
const removeError = () => {
  error.innerHTML = ``;
};

// 'CONVERT' BUTTON LISTENER
form.addEventListener("submit", (e) => {
  setTimeout(runConversion, 1000);

  convertIcon.classList.add("rotate");
  const removeRotateClass = () => {
    convertIcon.classList.remove("rotate");
  };
  setTimeout(removeRotateClass, 1000);

  e.preventDefault();
});
