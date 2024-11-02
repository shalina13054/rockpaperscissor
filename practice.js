let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const display = document.getElementById("msg");
const niscore = document.getElementById("user-score");
const compu = document.getElementById("comp-score");
const genComp = () => {
    const options = ["rock","paper","scissors"];
    const i = Math.floor(Math.random()*3);
    return options[i];
}
const showWinner = (userpoint) => {
    if(userpoint)
    {
        userScore++;
        niscore.innerText = userScore;
        console.log("You win");
        display.innerText = "You win";
        display.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compu.innerText = compScore;
        console.log("Computer win");
        display.innerText = "You lose";
        display.style.backgroundColor = "red";
    }
}
const drawGame = () => {
    console.log("game draw aindi");
    display.innerText = "Draw game";
    display.style.backgroundColor = "#081b31"
}
const playGame = (userChoice) => {
    console.log("user-choice=",userChoice);
    const compChoice = genComp();
    console.log("comp-choice",compChoice);
    if(userChoice === compChoice)
    {
        //draw
        drawGame();
    }
    else {
        let userpoint = true;
        if(userChoice === "rock")
        {
            userpoint = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userpoint = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "scissors")
        {
            userpoint = compChoice === "rock" ? false : true;
        }
        showWinner(userpoint);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});