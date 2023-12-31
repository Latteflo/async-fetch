window.addEventListener("DOMContentLoaded", (event) => {
  let savedData = localStorage.getItem("apiData")
  if (savedData) {
    let data = JSON.parse(savedData)
    let output = document.createElement("div")
    output.innerHTML = `The name ${data.name} is most likely ${data.age} years old in ${data.country_id}.`
    outputField.appendChild(output)
  }
  clearButton()
})

let button = document.querySelector("button")
let outputField = document.querySelector("#output")
let input = document.querySelector("input")

button.addEventListener("click", function () {
  let dataValue = input.value
  dataValue =
    dataValue.charAt(0).toUpperCase() + dataValue.slice(1).toLowerCase()
  dataValue = dataValue.trim()
  let country = document.querySelector("#country")
  let codeCountry = country.value

  fetch(`https://api.agify.io?name=${dataValue}&country_id=${codeCountry}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK")
      }
      return response.json()
    })
    .then((data) => {
      if (!data || !data.name || !data.age || !data.country_id) {
        let errorMsg =
          "No data found for the provided name in the country you picked."
        console.error(errorMsg)
        outputField.innerHTML = errorMsg
      } else {
        let output = document.createElement("div")
        output.innerHTML = `The name ${data.name} is most likely ${data.age} years old in ${data.country_id}.`
        outputField.appendChild(output)
        localStorage.setItem("apiData", JSON.stringify(data))
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error)
      outputField.innerHTML = "Error: " + error.message
    })
})

function clearButton() {
  let clearButton = document.querySelector("#clear")
  clearButton.addEventListener("click", function () {
    localStorage.removeItem("apiData")
    outputField.innerHTML = ""
    this.remove()
  })
}
