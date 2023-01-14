//set btns div as a var
var btns = document.getElementById("btns");
var playbtn = document.getElementById("playbtn");
var p = document.getElementById("p");
var result = document.getElementById("result");
var playscoreH3 = document.getElementById("playerscoreH3");
var pcscoreH3 = document.getElementById("pcscoreH3");
var playerpick = document.getElementById("playerpick");
var pcpick = document.getElementById("pcpick");
var gamecont = document.getElementById("gamecont");
var playagain = document.getElementById("playagain");
var player;
var pc;
var playscore = 0;
var pcscore = 0;
var rndresult;

btns.style.display = "none";

p.style.display = "none";

result.textContent = rndresult;

playagain.style.display = "none";

function onplay() {}

function ply() {
  playbtn.style.display = "none";
  p.style.display = "flex";
  btns.style.display = "inline";
}

function setplay(choice) {
  if (choice == 0) {
    player = 0;
    setpc();
    play();
  } else if (choice == 1) {
    player = 1;
    setpc();
    play();
  } else if (choice == 2) {
    player = 2;
    setpc();
    play();
  }

}

function tryagain() {
  location.reload();
}

function setpc() {
  pc = Math.floor(Math.random() * 3);
}

function play() {


  if (player == pc) {
    rndresult = "Tie This Round";
  } else if (player == 0 && pc == 1) {
    result.innerHTML = "PC Wins";
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
    pcscoreH3.innerHTML = "PC Score: " + pcscore;
    rndresult = "PC Wins this Round";
  } else if (player == 0 && pc == 2) {
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
    playscoreH3.innerHTML = "Player Score: " + playscore;
    rndresult = "Player Wins this Round";
  } else if (player == 1 && pc == 0) {
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
    playscoreH3.innerHTML = "Player Score: " + playscore;
    rndresult = "Player Wins this Round";
  } else if (player == 1 && pc == 2) {
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
    pcscoreH3.innerHTML = "PC Score: " + pcscore;
    rndresult = "PC Wins this Round";
  } else if (player == 2 && pc == 0) {
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
    pcscoreH3.innerHTML = "PC Score: " + pcscore;
    rndresult = "PC Wins this Round";
  } else if (player == 2 && pc == 1) {
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
    playscoreH3.innerHTML = "Player Score: " + playscore;
    rndresult = "Player Wins this Round";
  }

  if (playscore === 5) {
    rndresult = "Player Won That Match, Play again?";
    gamecont.style.display = "none";
    playagain.style.display = "flex";
    rndresult = "Player won that match";
  }

  if (pcscore === 5) {
    rndresult = "PC Won That Match, Play again?";
    gamecont.style.display = "none";
    playagain.style.display = "flex";
    rndresult = "PC won that match";
  }

  result.innerHTML = rndresult;
}
