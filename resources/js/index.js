const cardInputs = document.getElementsByClassName('card-input');

for (let i = 0; i < cardInputs.length; i++) {
  let cardInput = cardInputs[i];
  cardInput.dataset.indexNumber = i;
  cardInput.addEventListener('input', focusInput);
}

// functions
function focusInput(event) {
  let eventTargetValue = event.target.value;
  let currentIndex = Number(this.dataset.indexNumber);
  if (eventTargetValue.length === 4) {
    if (cardInputs[currentIndex + 1] != undefined) {
      cardInputs[currentIndex + 1].focus();
    } 
  } else if (eventTargetValue.length === 0) {
    if (cardInputs[currentIndex - 1] != undefined) {
      cardInputs[currentIndex - 1].focus();
    }
  }
}
