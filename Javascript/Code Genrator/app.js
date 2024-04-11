
let btn = document.querySelector("button");
let div = document.querySelector("div");
let h1 = document.querySelector('h1');

btn.addEventListener('click', function(){
    
   let genrateRandomC = genColor();
   h1.innerText=genrateRandomC;

   div.style.backgroundColor=genrateRandomC;

})


function genColor(){

    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);
    let color=`rgb(${red}, ${green}, ${blue})`
    return color;
}