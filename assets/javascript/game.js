
//generate targetNumber between 19 - 120
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#number-to-guess").text(targetNumber);

//generate crystal values
var crystalValue = [];
for (var i=0; i<4; i++) {
    crystalValue[i] = Math.floor(Math.random() * 12) + 1;
    console.log('crystal '+ i + ': ' + crystalValue[i]);

}

//reset function generates all new numbers
function reset(){
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#number-to-guess").text(targetNumber);

    crystalValue = [];
    for (var i=0; i<4; i++) {
        crystalValue[i] = Math.floor(Math.random() * 12) + 1;
        console.log('crystal '+ i + ': ' + crystalValue[i]);
    }
    score = 0;
    $("#total-score").text(score);
}

//function to check for win or loss
function checkScore() {
    if (score === targetNumber) {
        wins++;
        $("#wins").text(wins);
        //reset game - generate new target number and crystal values
        reset();
    }

    else if (score >= targetNumber) {
        losses++;
        $("#losses").text(losses);
        //reset game - generate new target number and crystal values
        reset()
    }

}


//create a score variable to keep track of the score
var score = 0;
$("#total-score").text(score);

//create a wins variable to keep track of the score
var wins = 0;
$("#wins").text(wins);

//create a losses variable to keep track of the score
var losses = 0;
$("#losses").text(losses);


//Click function for each crystal button
$("#crystal-1").on("click", function() {
    // Add the crystalValue to the score
    score += crystalValue[0];
    $("#total-score").text(score);
    checkScore();
});

$("#crystal-2").on("click", function() {
    // Add the crystalValue to the score
    score += crystalValue[1];
    $("#total-score").text(score);
    checkScore();
});

$("#crystal-3").on("click", function() {
    // Add the crystalValue to the score
    score += crystalValue[2];
    $("#total-score").text(score);
    checkScore();
});

$("#crystal-4").on("click", function() {
    // Add the crystalValue to the score
    score += crystalValue[3];
    $("#total-score").text(score);
    checkScore();
});

