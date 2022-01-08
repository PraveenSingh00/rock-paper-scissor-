let userScore=0;
let computerScore =0;
let draw=0;
function getComputerChoice(){
    const choices=["scissors","paper","rock"];
    const randomNo =Math.floor(Math.random()*3);
    const computerChoice =choices[randomNo];
    var randomImageSource2= "<img src='photo/" + computerChoice+".png' alt='rock'>";
    document.getElementById("Computer1").innerHTML=randomImageSource2;
    return computerChoice;
}
const updateScore = () => {
    const playerScore = document.querySelector(".human input");
    const compScore = document.querySelector(".computer input");
    const drw=document.querySelector(".draw input")
    playerScore.value = userScore;
    compScore.value = computerScore;
    drw.value=draw;
}
const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const result = document.querySelector(".Result");
    //Checking for a tie
    if (playerChoice === computerChoice) {
       result.textContent = "It's a Draw. We both Played " + playerChoice;
      draw++;
      updateScore();
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          result.textContent = "Human wins. Rock breaks Scissors.";
          userScore++;
          updateScore();
          return;
        } else {
          result.textContent = "Computer Wins. Paper covers Rock.";
          computerScore++;
          updateScore();
          return;
        }
    }
    //Check for Paper
    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          result.textContent = "Computer Wins. Scissors cut Paper.";
          computerScore++;
          updateScore();
          return;
        } else {
          result.textContent = "Player Wins. Paper covers Rock.";
          userScore++;
          updateScore();
          return;
        }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          result.textContent = "Computer Wins. Rock breaks Scissors.";
          computerScore++;
          updateScore();
          return;
        } else {
          result.textContent = "Player Wins. Scissors cut Paper.";
          userScore++;
          updateScore();
          return;
        }
    }
}
function gamevalueRock() {
        document.getElementById("human1").innerHTML="<img src='photo/rock.png' alt='rock'>";
        // getComputerChoice();
        compareHands("rock",getComputerChoice());
}
function gamevaluePaper() {
        document.getElementById("human1").innerHTML="<img src='photo/paper.png' alt='paper'>";
        // getComputerChoice();
        compareHands("paper",getComputerChoice());
}
function gamevalueScissors() {
        document.getElementById("human1").innerHTML="<img src='photo/scissors.png' alt='scissors'>";
        // getComputerChoice();
        compareHands("scissors",getComputerChoice());
}
function refresh(){
        window.location.reload("Refresh");
        alert("Quit this game and start another?");
} 