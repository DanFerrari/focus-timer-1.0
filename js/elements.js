
  const buttonPlay = document.querySelector('.play')
  const buttonPause = document.querySelector('.pause')
  const buttonStop = document.querySelector('.stop')
  const buttonAdd = document.querySelector('.add')
const buttonRemove = document.querySelector('.remove')

const minutesDisplay = document.querySelector('.minutes') 
const secondsDisplay = document.querySelector('.seconds')


const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFireplace = document.querySelector('.fireplace')

const forestAudio = new Audio('./Audio/Floresta.wav')
const rainAudio = new Audio('./Audio/Chuva.wav')
const coffeeAudio = new Audio('./Audio/Cafeteria.wav')
const fireplaceAudio = new Audio('./Audio/Lareira.wav')
const endTime = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


export {
buttonPlay,
buttonPause,
buttonStop,
buttonAdd,
buttonRemove,
minutesDisplay,
secondsDisplay,
buttonForest,
buttonRain,
buttonCoffee,
buttonFireplace,
forestAudio,
rainAudio,
coffeeAudio,
fireplaceAudio,
endTime
}