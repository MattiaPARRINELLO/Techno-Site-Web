let jeu = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let rock = "✊";
let paper = "✋";
let scissors = "✌️";

function button(type) {
  var computer = Math.floor(Math.random() * 3);
  var computerChoice = jeu[computer];
  var userChoice = type;

  if (userChoice === computerChoice) {
    if (userChoice === "rock") {
      userChoice = rock;
    } else if (userChoice === "paper") {
      userChoice = paper;
    } else if (userChoice === "scissors") {
      userChoice = scissors;
    }

    if (computerChoice === "rock") {
      computerChoice = rock;
    } else if (computerChoice === "paper") {
      computerChoice = paper;
    } else if (computerChoice === "scissors") {
      computerChoice = scissors;
    }

    document.getElementById("userChoice").innerHTML = userChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;

    tie();
  } else if (userChoice === "rock" && computerChoice === "paper") {
    document.getElementById("userChoice").innerHTML = rock;
    document.getElementById("computerChoice").innerHTML = paper;

    loose();
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    document.getElementById("userChoice").innerHTML = rock;
    document.getElementById("computerChoice").innerHTML = scissors;

    win();
  } else if (userChoice === "paper" && computerChoice === "rock") {
    document.getElementById("userChoice").innerHTML = paper;
    document.getElementById("computerChoice").innerHTML = rock;

    win();
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    document.getElementById("userChoice").innerHTML = paper;
    document.getElementById("computerChoice").innerHTML = scissors;

    loose();
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    document.getElementById("userChoice").innerHTML = scissors;
    document.getElementById("computerChoice").innerHTML = rock;

    loose();
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    document.getElementById("userChoice").innerHTML = scissors;
    document.getElementById("computerChoice").innerHTML = paper;

    win();
  }
}

function win() {
  document.getElementById("infoText").innerHTML = "Vous avez gagner";
  document.getElementById("infoText").style.color = "green";

  document.getElementById("infoText2").innerHTML = "Vous avez gagner";
  document.getElementById("infoText2").style.color = "green";

  userScore++;
  document.getElementById("userScore").innerHTML = userScore;

  if (userScore >= 5) {
    ultraWin();
  }
}

function loose() {
  document.getElementById("infoText").innerHTML = "Vous avez perdu";
  document.getElementById("infoText").style.color = "red";

  document.getElementById("infoText2").innerHTML = "Vous avez perdu";
  document.getElementById("infoText2").style.color = "red";

  computerScore++;
  document.getElementById("computerScore").innerHTML = computerScore;

  if (computerScore >= 5) {
    ultraLoose();
  }
}

function tie() {
  document.getElementById("infoText").innerHTML = "C'est une égalité";
  document.getElementById("infoText").style.color = "orange";

  document.getElementById("infoText2").innerHTML = "C'est une égalité";
  document.getElementById("infoText2").style.color = "orange";
}

function ultraWin() {
  document.getElementById("infoText").innerHTML = "Vous avez gagner";
  document.getElementById("infoText").style.color = "#003300";

  document.getElementById("infoText2").innerHTML = "Vous avez gagner";
  document.getElementById("infoText2").style.color = "#003300";

  document.body.style.backgroundColor = "green";

  document.getElementById("userChoice").innerHTML = "🎊";
  document.getElementById("computerChoice").innerHTML = "🎊";

  document.getElementById("userScore").innerHTML = "Vous avez gagner";
  document.getElementById("computerScore").innerHTML = "Vous avez gagner";

  document.getElementById("computerInfo").style.display = "none";
  document.getElementById("userInfo").style.display = "none";

  setTimeout(() => {
    reset();
  }, 3000);
}

function ultraLoose() {
  document.getElementById("infoText").innerHTML = "C'est perdu";
  document.getElementById("infoText").style.color = "#330000";

  document.getElementById("infoText2").innerHTML = "C'est perdu";
  document.getElementById("infoText2").style.color = "#330000";

  document.body.style.backgroundColor = "red";

  document.getElementById("userChoice").innerHTML = "💀";
  document.getElementById("computerChoice").innerHTML = "💀";

  document.getElementById("userScore").innerHTML = "Vous avez perdu";
  document.getElementById("computerScore").innerHTML = "Vous avez perdu";

  document.getElementById("computerInfo").style.display = "none";
  document.getElementById("userInfo").style.display = "none";

  setTimeout(() => {
    reset();
  }, 3000);
}

function reset() {
  userScore = 0;
  computerScore = 0;

  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  document.body.style.backgroundColor = "white";

  document.getElementById("userChoice").innerHTML = "⏱";
  document.getElementById("computerChoice").innerHTML = "⏱";

  document.getElementById("infoText").innerHTML = "Essayer encore!";
  document.getElementById("infoText").style.color = "black";

  document.getElementById("infoText2").innerHTML = "Choisissez une option";
  document.getElementById("infoText2").style.color = "darkred";

  document.getElementById("computerInfo").style.display = "block";
  document.getElementById("userInfo").style.display = "block";
}
