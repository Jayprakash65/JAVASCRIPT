const count = document.querySelector('.count')
const decrement = document.querySelector('.decrement')
const increment = document.querySelector('.increment')
const reset = document.querySelector('.reset')

let number = 0;

increment.addEventListener('click', function(){
    number = number + 1;
    count.innerHTML = number;
    
})

decrement.addEventListener('click', function(){
    number--;
    count.innerHTML = number;
    
})

reset.addEventListener('click', function(){
    number = 0;
    count.innerHTML = number;
    
})

