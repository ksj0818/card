/**
 * 같은 클래스 이름의 인풋태그 인덱스 dataset 하기
 * input 이벤트 걸어주기
 * setFocus 함수에서 각각의 조건 걸어주기
 */

const cardInputs = document.getElementsByClassName('card-input');

for (let i = 0; i < cardInputs.length; i++) {
  let cardInput = cardInputs[i];
  cardInput.dataset.indexNumber = i;
  cardInput.addEventListener('input', setFocus);
}


// functions
function setFocus(event) {
  let currentIndexNumber = Number(this.dataset.indexNumber);
  let eventValue = event.target.value;
  
  if (eventValue.length === 4) {
    if (cardInputs[currentIndexNumber + 1] != undefined) {
      cardInputs[currentIndexNumber + 1].focus();
    }
  } else if (eventValue.length === 0) {
    if (cardInputs[currentIndexNumber - 1] != undefined) {
      cardInputs[currentIndexNumber - 1].focus();
    }
  }
}