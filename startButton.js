export const btnStart = (element) => {

  const mainPage = document.querySelector('.mainPage');
  const playPage = document.querySelector('.playPage')

  element.addEventListener('click', () => {
    mainPage.style.display = 'none'
    playPage.style.display = 'block'
  })
}
