
// const cards = document.querySelectorAll('.cards');

// function flipCard() {
//   this.classList.toggle('flip');
// }

cards.forEach(card => card.addEventListener('click', flipCard));

const cards = document.querySelectorAll('.cards');

 let hasFlippedCard = false;

 let firstCard, secondCard;

  function flipCard() {

   this.classList.toggle('flip');

   this.classList.add('flip');

   if (!hasFlippedCard) {

     hasFlippedCard = true;

     firstCard = this;

   }
  }

cards.forEach(card => card.addEventListener('click', flipCard));