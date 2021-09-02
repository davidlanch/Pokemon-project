let count = 12



function render(){
    let container = document.getElementById('pokemon')
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')

prev.onclick = function(){
    
    if(count > 1){
        count=count -1;
        render()
    }
  
}

next.onclick = function(){
   
    if(count < 650){
        count=count +1;
        render()     
    }
    
}

render()