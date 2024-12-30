console.log("Hello World");
let cc; let hc; let HumanScore=0; let ComputerScore=0;
function getHumanChoice(){
    let x=prompt("Choose between rock, paper and scissors");
    hc=x.toLowerCase();
}
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
    getHumanChoice();
    console.log("You chose " + hc);
    res=getRandomLimit(3);
    getComputerChoice(res);
    console.log("The computer chose " + cc);
    alert(hc+" vs. "+cc);
    if(hc==cc){
        alert("It's a draw.");
    }
    if(hc=="rock"&&cc=="paper"){
        alert("You lose!");
        ComputerScore+=1;
    }
    if(hc=="rock"&&cc=="scissors"){
        alert("You won!");
        HumanScore+=1;
    }
    if(hc=="paper"&&cc=="rock"){
        alert("You won!");
        HumanScore+=1;
    }
    if(hc=="paper"&&cc=="scissors"){
        alert("You lose!");
        ComputerScore+=1;
    }
    if(hc=="scissors"&&cc=="paper"){
        alert("You won!");
        HumanScore+=1;
    }
    if(hc=="scissors"&&cc=="rock"){
        alert("You lose!");
        ComputerScore+=1;
    }
    alert("Score: "+HumanScore+" - "+ComputerScore);
}
function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    alert("GAME OVER");
}
playGame();