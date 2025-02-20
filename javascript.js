console.log("Hello World");
let cc; let hc; let HumanScore=0; let ComputerScore=0; let round=1;
const scoreMarker=document.querySelector("#score");
const infoMarker=document.querySelector("#information");
const infoText=document.createElement("p");
infoText.innerText="Round "+round;
infoMarker.appendChild(infoText);
infoMarker.setAttribute("style","font-size:1.5rem; text-align: center; margin-top=1px; border: 1mm solid black; padding: 3mm;");
const scoreUser=document.createElement("div");
const scoreCPU=document.createElement("div");
scoreUser.textContent="User Score="+HumanScore;
scoreCPU.textContent="Computer Score="+ComputerScore;
scoreMarker.appendChild(scoreUser);
scoreMarker.appendChild(scoreCPU);
scoreMarker.setAttribute("style","font-size:2rem; margin-bottom: 1mm; padding:1cm; color: lawngreen; background: black; display: flex; justify-content: space-around");
function getComputerChoice(x){
    if(x==0){
        cc="rock";
    }else if(x==1){
        cc="paper";
    }else if(x==2){
        cc="scissors";
    }
}
function getRandomLimit(max) {
    return Math.floor(Math.random() * max);
}
function playRound(){
    let res;
    infoText.innerText="Round "+round+"\nYou chose "+ hc;
    res=getRandomLimit(3);
    getComputerChoice(res);
    infoText.innerText+="\nThe computer chose " + cc;
    infoText.innerText+="\n"+hc+" vs. "+cc;
    if(hc==cc){
        infoText.innerText+="\nIt's a draw.";
    }
    if(hc=="rock"&&cc=="paper"){
        ComputerScore+=1;
        infoText.innerText+="\nYou lose!";
    }
    if(hc=="rock"&&cc=="scissors"){
        HumanScore+=1;
        infoText.innerText+="\nYou won!";
    }
    if(hc=="paper"&&cc=="rock"){
        HumanScore+=1;
        infoText.innerText+="\nYou won!";
    }
    if(hc=="paper"&&cc=="scissors"){
        ComputerScore+=1;
        infoText.innerText+="\nYou lose!";
    }
    if(hc=="scissors"&&cc=="paper"){
        HumanScore+=1;
        infoText.innerText+="\nYou won!";
    }
    if(hc=="scissors"&&cc=="rock"){
        ComputerScore+=1;
        infoText.innerText+="\nYou lose!";
    }
    scoreUser.textContent="User Score="+HumanScore;
    scoreCPU.textContent="Computer Score="+ComputerScore;
    round+=1;
    if((HumanScore===5)||(ComputerScore===5)){
        infoText.innerText="The GAME is OVER\n";
        if(HumanScore>ComputerScore){
            infoText.innerText+="YOU are the WINNER!!!";
        }else if(ComputerScore>HumanScore){
            infoText.innerText+="The winner is the CPU (You've lost!)";
        }else{
            infoText.innerText+="Looks like it's a draw game! ):";
        }
        infoText.innerText+="\nRefresh the page if you want to play again. See you next time!";
        round=0;
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id==="rock"){
            hc="rock";
        }else if (button.id==="paper"){
            hc="paper";
        }else if (button.id==="scissors"){
            hc="scissors";
        }
        if (round!=0){
            playRound();
        }
    });
});
