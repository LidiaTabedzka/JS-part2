//Deklaracja zmiennych
var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock'); 
var pickPaper = document.getElementById('js-playerPick_paper'); 
var pickScissors = document.getElementById('js-playerPick_scissors'); 

var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

var winnerAlertElem = document.getElementById('js-winnerAlert');

var gameState = 'notStarted';  //started // ended
var player = {
    name: '',
    score: 0
};
var computer = {
    score: 0
};


//Event listener
newGameBtn.addEventListener('click', newGame); 
pickRock.addEventListener('click', function() { playerPick('rock') }); 
pickPaper.addEventListener('click', function() { playerPick('paper') }); 
pickScissors.addEventListener('click', function() { playerPick('scissors') });


//Wyświetlanie głównych elemntów strony: przycisku, tablicy wyboru i tablicy wyników
function setGameElements() {
    switch(gameState) {
      case 'started':
          newGameElem.style.display = 'none';
          pickElem.style.display = 'block';
          resultsElem.style.display = 'block';
        break;
      case 'ended':
          newGameElem.style.display = 'block';
          newGameBtn.innerText = 'Jeszcze raz';
          resultsElem.style.display = 'block';
          pickElem.style.display = 'none';
        break;
      case 'notStarted':
      default:
          newGameElem.style.display = 'block';
          pickElem.style.display = 'none';
          resultsElem.style.display = 'none';
    }
}

setGameElements();

//Liczenie punktów
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

//Rozpoczęcie gry
function newGame() {
    player.name = prompt('Please enter your name', 'imię gracza');
    if (player.name) {
      player.score = computer.score = 0;

      playerPickElem.innerText = "Player selection";
      computerPickElem.innerText = "Computer selection";
      playerResultElem.innerText = "Player Score";
      computerResultElem.innerText = "Computer Score";

      pickElem.style.display = 'block';
      winnerAlertElem.innerText = "";

      gameState = 'started';
      setGameElements();
  
      playerNameElem.innerHTML = player.name;
      setGamePoints();
    }
}

//Wybór gracza
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

//Wybór komputera
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

//Sprawdzenie kto wygrał rundę
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  
    if (playerPick == computerPick) {
        // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
  
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    } else {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    }

    setGamePoints();
    gameOver();
}

//Zakończenie gry
function gameOver() {
    if (player.score === 10 || computer.score === 10) {
        gameState = 'ended';
        setGameElements();
        player.score === 10 ? (winnerAlertElem.innerText = "The winner is: " + player.name) : (winnerAlertElem.innerText = "The winner is: Computer");
    }
}