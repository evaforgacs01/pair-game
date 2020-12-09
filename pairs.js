
'use strict';

const cards = document.querySelectorAll('.memory-cards');
  let points = 0;
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 (function shuffle() {

   cards.forEach(card => {

     let ramdomPos = Math.floor(Math.random() * 10);

     card.style.order = ramdomPos;

   });

   const card = document.querySelectorAll('.card');
    card.forEach( card => {
        card.addEventListener('click', cardClick);
    });

   const showPoints = (points) => {
      document.querySelector('.user-points').textContent = points;
  }

  const checkPair = () => {
      const firstCardIcon = document.querySelector('.card.flipped i');
      if (firstCardIcon) {
          const firstIconClass = firstCardIcon.className.split(' ');
          const pair = document.querySelectorAll(`.card.flipped .${firstIconClass.pop()}`);
          if (pair.length == 2) {
              points++;
              showPoints(points);
              document.querySelectorAll(`.card.flipped`).forEach( 
                  card => card.classList.add('found') 
              );
          }
      }
  }
  

 })();

  cards.forEach(card => card.addEventListener('click', flipCard));



//   setInterval( () => {
//     const time = getCurrentTime();    
//     const clockFace = document.querySelector('.clock-face');
//     clockFace.textContent = time;
// }, 1000 );

// // Stopperóra.
// let stopperTime = 0;
// let stopperIsRunning = false;
// setInterval( () => {
//     if (!stopperIsRunning) {
//         return;
//     }
    
//     stopperTime++;
//     const seconds = padNumbers(stopperTime % 60);
//     const minutes = padNumbers(Math.floor(stopperTime / 60) % 60);
//     const hours = padNumbers(Math.floor(stopperTime / 3600));
//     const time = `${[hours, minutes, seconds].join(':')}`;
//     const stopperFace = document.querySelector('.stopper-face');
//     stopperFace.textContent = time;
// }, 1000);

// document.querySelector('.start-stop-btn').addEventListener('click', () => {
//     if (stopperIsRunning) {
//         stopperIsRunning = false;
//         stopperTime = 0;
//     } else {
//         stopperIsRunning = true;
//     }
// });





