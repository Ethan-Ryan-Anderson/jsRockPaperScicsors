function play() {

if (player == pc ) {
    console.log("Tie");
}

else if (player == 0 && pc == 1) {
    console.log("PC Wins");
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
    pcscoreH3.innerHTML = "PC Score: " + pcscore;
}

else if (player == 0 && pc == 2) {
    console.log("Player Wins");
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
    playscoreH3.innerHTML = "Player Score: " + playscore;
}

else if (player == 1 && pc == 0) {
    console.log("Player Wins");
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
    playscoreH3.innerHTML = "Player Score: " + playscore;
}

else if (player == 1 && pc == 2) {
    console.log("PC Wins");
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
    pcscoreH3.innerHTML = "PC Score: " + pcscore;
}

else if (player == 2 && pc == 0) {
    console.log("PC Wins");
    pcscore = pcscore + 1;
    console.log("PC Score: " + pcscore);
    pcscoreH3.innerHTML = "PC Score: " + pcscore;
}

else if (player == 2 && pc == 1) {
    console.log("Player Wins");
    playscore = playscore + 1;
    console.log("Player Score: " + playscore);
    playscoreH3.innerHTML = "Player Score: " + playscore;
}  

if (playscore == 5) {
    result.innerHTML = "Player Wins";
    playscore = 0;
    pcscore = 0;
}
    else if (pcscore == 5) {
        result.innerHTML = "PC Wins";
        playscore = 0;
        pcscore = 0;
    }
    else {
        result.innerHTML = "";
    }
}

  
