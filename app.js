let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started = false;
let level=0;
let highscore=0;
let h2=document.querySelector('h2');

document.addEventListener("keypress", function(){
   if(started==false){
    started=true;
    console.log("Game Started");
    levelUp();
   }
});

function gameFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
      btn.classList.remove("flash");
    }, 250);
   
 }

// function userFlash(btn){
//     btn.classList.add("userflash"); 
//     setTimeout(function(){
//       btn.classList.remove("userflash");
//     }, 250);
   
// }


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); 
    // console.log(randIdx); 
    // console.log(randColor);
    // console.log(randBtn)
    gameSeq.push(randColor);
    gameFlash(randBtn); 
}

function checkAns(idx){
    console.log(idx);
    console.log(`curr level ${level}`);
    console.log(userSeq);
    console.log(gameSeq);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
         setTimeout(levelUp,1000);
        }
    }
    else{
        if(started==true){ 
        if(highscore<(level-1)){
            highscore=level-1;
        }
        h2.innerHTML=`Highest Score: ${highscore}</br> Game Over!! Your Score was <b>${level-1}</b> </br> Press any key to start again`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        }, 150)
        reset();
        }
    }
}

function btnPress() {
    
    let btn=this;
    // console.log(btn);
    gameFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq=[];
    userFlash=[];
    level=0;
}