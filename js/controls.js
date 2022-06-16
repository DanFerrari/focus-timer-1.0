

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
} from './elements.js'


export default function control(){

buttonPause.addEventListener('click',function(){

buttonPause.classList.toggle('hide')
buttonPlay.classList.toggle('hide')


})
buttonPlay.addEventListener('click',function(){

  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  
  })

buttonStop.addEventListener('click',function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})
buttonAdd.addEventListener('click',function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})
buttonRemove.addEventListener('click',function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})




}