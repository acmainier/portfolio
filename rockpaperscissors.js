console.log('hi!');

const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
return userInput;
} else {
 return 'Invalid value! What is this?';
}
}
/* test getUserChoice 
console.log(getUserChoice('prout')); */
const getComputerChoice = () => {
  const wholeNumber = Math.floor(Math.random() *3);
  switch (wholeNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};
/* test getComputerChoice
console.log(getComputerChoice()); */

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'User won!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else if (computerChoice === 'rock' ){
      return 'User won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else if (computerChoice === 'paper') {
      return 'User won!'
    }
  }
  if (userChoice === 'bomb') {
    return 'Coup de maître! Computer destroyed!';
  }
  if (userChoice !== 'scissors' && userChoice !== 'paper' && userChoice !== 'rock' && userChoice !=='bomb') {
    return 'Wrong game!';
  }
}
/* Testing Winner
console.log(determineWinner('rock', 'paper')); */
const playGame = () => {
  let userChoice = getUserChoice('bomb');
  console.log(`You chose: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);
  let WinnerIs = determineWinner(userChoice, computerChoice);
  console.log(WinnerIs);
};

playGame();