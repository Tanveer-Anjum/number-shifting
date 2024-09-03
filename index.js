let firstCount = document.querySelector(".firstApple span");
let secondCount = document.querySelector('.secondApple span');
const rightButton = document.querySelector('.rightButton');
const leftButton =document.querySelector('.leftButton');

let totalApple =100;
let secondApple=0;

let firstApple = totalApple-secondApple;

firstCount.innerText =firstApple;
secondCount.innerText = 0;


rightButton.addEventListener('click',()=>{
    if(firstApple >0){
        firstApple--;
        secondApple++;
    
        firstCount.innerText = firstApple;
        secondCount.innerText = secondApple;
    }
   

})

leftButton.addEventListener('click',()=>{

    if(secondApple >0){
        firstApple++;
        secondApple--;
    
        firstCount.innerText = firstApple;
        secondCount.innerText = secondApple;
    }
 

})




