const inputElements = document.getElementsByClassName('card-number')
for (let index = 0; index < inputElements.length; index++) {
  let inputElement = inputElements[index]
  inputElement.dataset.index = index
  inputElement.addEventListener('input', focusElement)
}

function focusElement(event) {
  if (event.target.value.length == 4) {      
    let currentIndex = Number(this.dataset.index)
    if (inputElements[currentIndex + 1] != undefined) {
      inputElements[currentIndex + 1].focus()
    }
  } else if (event.target.value.length == 0) {
    let currentIndex = Number(this.dataset.index)
    if (inputElements[currentIndex - 1] != undefined) {
      inputElements[currentIndex - 1].focus()
    }
  } 
} 