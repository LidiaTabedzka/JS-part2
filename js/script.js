//Obsługa przycisku New Game
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

//Obsługa przycisków wyboru gracza
var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

//Startowe zmienne: brak imienia gracza, zerowa punktacja
var gameState = 'notStarted';  //started // ended
var player = {
    name: '',
    score: 0
};
var computer = {
    score: 0
};

//Wyświetlanie głównych elemntów strony: przycisku, tablicy wyboru i tablicy wyników
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

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

//Rozpoczęcie gry
var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

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

//Wyświetlenie wyboru gracza i komputera na stronie
var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

//Sprawdzenie kto wygrał rundę
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  
    var winnerIs = 'player';
  
      if (playerPick == computerPick) {
          winnerIs = 'noone'; // remis
      } else if (
          (computerPick == 'rock' &&  playerPick == 'scissors') ||
          (computerPick == 'scissors' &&  playerPick == 'paper') ||
          (computerPick == 'paper' &&  playerPick == 'rock')) {
  
          winnerIs = 'computer';
      }
  
      if (winnerIs == 'player') {
          playerResultElem.innerHTML = "Win!";
          player.score++;
      } else if (winnerIs == 'computer') {
          computerResultElem.innerHTML = "Win!";
          computer.score++;
      }
    
    setGamePoints();
    gameOver();
}

//Zakończenie gry
var winnerAlertElem = document.getElementById('js-winnerAlert');

function gameOver() {
    if (player.score === 10 || computer.score === 10) {
        gameState = 'ended';
        setGameElements();
        if (player.score === 10) {
            winnerAlertElem.innerText = "The winner is: " + player.name;
        } else {winnerAlertElem.innerText = "The winner is: Computer";}
    }
}