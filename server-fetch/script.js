let button = document.querySelector("button")
let outputField = document.querySelector("#output")
let input = document.querySelector("input")

button.addEventListener("click", function () { 
  let dataValue = input.value 
  let country = document.querySelector("#country")
  let codeCountry = country.value
fetch(`https://api.agify.io?name=${dataValue}&country_id=${codeCountry}`)
    .then((response) => response.json())
    .then((data) => {
      let output = document.createElement("div")
      output.innerHTML = `The name ${data.name} is most likely ${data.age} years old in ${data.country_id}.`
      outputField.appendChild(output)
    })
    .catch((error) => {
        console.log(error)
        }
    )
})