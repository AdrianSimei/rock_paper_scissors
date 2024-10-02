import { gameLogic } from './gameLogic.js';
import { btnStart } from './startButton.js'

btnStart(document.querySelector('#start'))

let totalTime = 3

const updateClock = (callback) => {
  document.querySelector('.countDown').innerHTML = totalTime;
  let vsCenter = document.querySelector('.vsCenter')

  const options = {
    1: 'SCISSORS',
    2: 'PAPER',
    3: 'ROCK'
  }

  if (totalTime === 0) {
    callback()
    totalTime = 3
  } else {
    vsCenter.innerHTML = options[totalTime];
    totalTime -= 1
    setTimeout(() => {
      updateClock(callback)
    }, 500);
  }


}

document.querySelectorAll('.btnOption').forEach(option => {

  option.addEventListener('click', () => {

    updateClock(() => gameLogic(option.id))

  });


})

document.querySelector('.toggle-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
  document.querySelector('h1').classList.toggle('dark-mode')
  document.querySelectorAll('h2').forEach(h2 => {
    h2.classList.toggle('dark-mode')
  })
  document.querySelectorAll('.actionBtn').forEach(btn => {
    btn.classList.toggle('btnDark-mode')
  })

  const btnMoon = document.querySelector('.toggle-mode')
  btnMoon.style.backgroundImage = btnMoon.style.backgroundImage.includes('moon.svg')
    ? "url('public/sun.svg')"
    : "url('public/moon.svg')";
})
