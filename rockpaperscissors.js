console.log("beginning");

const getComputerChoice = () => {
  const wholeNumber = Math.floor(Math.random() * 3);
  switch (wholeNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else if (computerChoice === "rock") {
      return "User won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else if (computerChoice === "paper") {
      return "User won!";
    }
  }
  if (userChoice === "bomb") {
    return "Coup de maître! Computer destroyed!";
  }
  if (
    userChoice !== "scissors" &&
    userChoice !== "paper" &&
    userChoice !== "rock" &&
    userChoice !== "bomb"
  ) {
    return "Wrong game!";
  }
};

const playGame = (userChoice) => {
  console.log(`You chose: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);
  let WinnerIs = determineWinner(userChoice, computerChoice);
  console.log(WinnerIs);
  document.getElementById("yourchoice").innerHTML = userChoice;
  document.getElementById("computerchoice").innerHTML = computerChoice;
  document.getElementById("result").innerHTML = WinnerIs;
};

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded beginning");
  document.querySelector("#rock").addEventListener("click", () => {
    playGame("rock");
  });
  document.querySelector("#scissors").addEventListener("click", () => {
    playGame("scissors");
  });
  document.querySelector("#paper").addEventListener("click", () => {
    playGame("paper");
  });
  document.querySelector("#bomb").addEventListener("click", () => {
    playGame("bomb");
  });
  console.log("DOMContentLoaded end");
});

console.log("end");
