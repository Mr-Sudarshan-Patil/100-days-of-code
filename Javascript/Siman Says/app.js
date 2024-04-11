
let gameSeq=[];
let userSeq=[];

let btns=['yellow' , 'red', 'purple', 'green'];

let started = false;
let level = 0;
let count=0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress" ,function(){

    if(started==false){
        console.log("game started")
        started=true; 
        levelUp();
    }
    
});

function flasUp(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");  
    },250)
}

function levelUp(){
    userSeq=[];
    level++;
    let h2 = document.querySelector('h2');
    h2.innerText=`Level: ${level}`;
    
    let randInd=Math.floor(Math.random()*3);
    let randColor=btns[randInd];

    let randBtn=document.querySelector(`.${randColor}`);

    // console.log(randInd);
    // console.log(randColor);

    gameSeq.push(randColor);
    console.log(gameSeq);
    flasUp(randBtn);
}


function checkAns(idx){
    // console.log("current level:", level);
    if(userSeq[idx]===gameSeq[idx]){
        console.log("Same Value");
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br>Press any key to start`;
    
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";  
        },150)

        reset();
    }
}

function btnPress(){
    let btn=this;
    flasUp(btn);

    userColor=this.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener('click', btnPress)
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
