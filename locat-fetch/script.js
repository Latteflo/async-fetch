let button = document.querySelector("button")
let list = document.querySelector("ul")

button.addEventListener("click", function () {
  fetch("./becode.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        let listItem = document.createElement("li")
        listItem.style.color = "darkred"
        listItem.innerHTML = data[i]
        setTimeout(function () {
          list.appendChild(listItem)
        }, 1000 * i)
      }
    })
})
