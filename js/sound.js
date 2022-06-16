export default function sounds(forest,rain,coffee,fireplace,forestSound,rainSound,coffeeSound,fireplaceSound)


{
    forest.addEventListener('click',function change(){
      const ft = forest.classList.toggle('check')
      forestSound.play()  
      if(ft == false){
        forestSound.pause()
      }

    })



    rain.addEventListener('click',function change(){
       const rn = rain.classList.toggle('check')
      rainSound.play()  
      if(rn == false){
        rainSound.pause()
      }
    })
    coffee.addEventListener('click',function change(){
      const cf = coffee.classList.toggle('check')
      coffeeSound.play()  
      if(cf == false){
        coffeeSound.pause()
      }
    })
    fireplace.addEventListener('click',function change(){
      const fp = fireplace.classList.toggle('check')
      fireplaceSound.play()  
      if(fp == false){
        fireplaceSound.pause()
      }
    })

    
 
    
  




 
}