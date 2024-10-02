let countP1 = 0, countP2 = 0
const jsConfetti = new JSConfetti();


const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

const playerImg = document.querySelector('.player');
const computerImg = document.querySelector('.computer');

const vsCenter = document.querySelector('.vsCenter');

export const gameLogic = (element) => {

  const plusCount = (element) => {
    if (element.id !== 'p1Score') {
      element.innerHTML = `${countP2 += 1}`
    } else {
      element.innerHTML = `${countP1 += 1}`
    }
  }

  const setImg = (P1, P2) => {
    playerImg.src = `public/optionsToPlay/${P1}.svg`
    computerImg.src = `public/optionsToPlay/${P2}.svg`
  }

  const options = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
  }

  const math = Math.floor(Math.random() * 3 + 1)
  const deviceElection = options[math];

  setImg(element, deviceElection)


  const winningConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };


  if (element === deviceElection) {
    console.log('empate');
  } else if (winningConditions[deviceElection] === element) {
    console.log('computadora gano')
    plusCount(p2Score)
  } else {
    console.log('Ganaste');
    plusCount(p1Score)
  }

  if (countP2 === 2 && countP1 < 2) {
    vsCenter.innerHTML = 'La computadora ganó';
    countP1 = 0
    countP2 = 0
    p1Score.innerHTML = countP1
    p2Score.innerHTML = countP2
    jsConfetti.addConfetti({
      emojis: ['💥'],
    })


  } else if (countP1 === 2 && countP2 < 2) {
    vsCenter.innerHTML = '¡Ganaste!';
    countP1 = 0
    countP2 = 0
    p1Score.innerHTML = countP1
    p2Score.innerHTML = countP2
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    })
  } else if (countP1 === 2 && countP2 === 2) {
    vsCenter.innerHTML = 'Punto ganador';
  }




}