const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura mi amor?',
  'Piensalo bien',
  'Segura?',
  'Segurisisisisisisisisisisisisisisisisisisisisisisisisima mi amor?',
  'Pero Segurisisisisisisisisisisisisisisisisisisisisisisisisima mi amor?',
  'Mira el otro botón'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})