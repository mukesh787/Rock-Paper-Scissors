function getComputerChoice(){
    return Math.floor(Math.random()*3);
   
}

function getHumanChoice(number){
    return number;
}



let HumanScore=0;
let ComputerScore=0;

function playRound(HumanChoice,ComputerChoice){
    if(HumanChoice>ComputerChoice){
        console.log("you won");
        HumanScore++;
    }else if(HumanChoice<ComputerChoice){
        console.log("You loose");
        ComputerChoice++;
    }else{
        console.log("match tied");
    }
}


function PlayGame(){
    for(let i=0;i<5;i++){
        let number=Number(window.prompt("please enter a number",""));
        let HumanChoice=getHumanChoice(number);
        let ComputerChoice=getComputerChoice();
        playRound(HumanChoice,ComputerChoice);
    }
    if(HumanScore>ComputerScore){
        console.log("match win");
    }else if(HumanScore<ComputerScore){
        console.log("match loose");
    }else{
        console.log("game tie");
    }
}

PlayGame();