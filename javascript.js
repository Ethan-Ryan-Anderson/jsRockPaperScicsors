
var player
var pc
var playscore = 0
var pcscore = 0
function setplayer() {
    player = prompt("Choose a play, 1.Rock, 2.Paper, 3.Scissors, Please Only Use Numbers");
    //rquire player to input somthing into the prompt
    if (player == null || player == "") {
        alert("Please Choose a Play");
        setplayer()
    }
    play()
}
function setpc() {
    pc = Math.floor(Math.random() * 3);
}

player - 1

function play() {

if (player == pc ) {
    console.log("Tie");
}

else if (player == 0 && pc == 1) {
    console.log("PC Wins");
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
}

else if (player == 0 && pc == 2) {
    console.log("Player Wins");
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
}

else if (player == 1 && pc == 0) {
    console.log("Player Wins");
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
}

else if (player == 1 && pc == 2) {
    console.log("PC Wins");
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
}

else if (player == 2 && pc == 0) {
    console.log("PC Wins");
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
}

else if (player == 2 && pc == 1) {
    console.log("Player Wins");
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
}  

if (playscore == 5 || pcscore == 5) {
    
    console.log("Game Over");
    console.log("Player Score: " + playscore);
    console.log("PC Score: " + pcscore);
    if (playscore > pcscore) {
        console.log("Player Wins");

    }
    else {
        console.log("PC Wins");
    }
}
    else {
        setpc()
        setplayer()
    }

}