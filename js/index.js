// ELEMENT SELECTORS
const form = document.getElementById('converter')
const convertIcon = document.getElementById('convert-symbol')

// 'FROM' ELEMENTS
const fromSelect = document.getElementById('from-select')
const fromInput = document.getElementById('from-unit')

// 'TO' ELEMENTS
const toSelect = document.getElementById('to-select')
const toInput = document.getElementById('to-input')

// TEMP UNIT VARIABLES
const c
const f
const k

// CONVERSION FUNCTIONS
const fromCelsius = (value) => {
  if (fromSelect === `Celsius °C` && toSelect === `Fahrenheit °F`) {
    // Run C to F conversion formula
  } else if (fromSelect === `Celsius °C` && toSelect === `Kelvin K`) {
    // Run C to K conversion formula
  }
}

const fromFahrenheit = (value) => {
  if (fromSelect === `Fahrenheit °F` && toSelect === `Celsius °C`) {
    // Run F to C conversion formula
  } else if (fromSelect === `Fahrenheit °F` && toSelect === `Kelvin K`) {
    // Run F to K conversion formula
  }
}

const fromKelvin = (value) => {
  if (fromSelect === `Kelvin K` && toSelect === `Celsius °C`) {
    // Run K to C conversion formula
  } else if (fromSelect === `Kelvin K` && toSelect === `Fahrenheit °F`) {
    // Run K to F conversion formula
  }
}


// CONVERT BUTTON LISTENER
form.addEventListener('submit', (e) => {
  convertIcon.classList.add('rotate')

  const removeRotateClass = () => {
    convertIcon.classList.remove('rotate')
  }

  setTimeout(removeRotateClass, 1000)

  e.preventDefault()
})




