let button = document.querySelector("button")
button.style.color = "black"
button.style.fontSize = "20px"
button.style.fontWeight = "bold"
button.style.borderRadius = "10px"
button.style.backgroundColor = "white"
button.style.border = "1px solid darkred"
button.style.padding = "15px 30px"
let list = document.querySelector("ul")

button.addEventListener("click", function () {
  fetch("./becode.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        let listItem = document.createElement("li")
        listItem.style.color = "darkred"
        listItem.style.fontSize = "20px"
        listItem.innerHTML = data[i]
        setTimeout(function () {
          list.appendChild(listItem)
        }, 1000 * i)
      }
    })
})
