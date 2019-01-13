/* This is just here so the file commits */

$(document).ready(function () {

/* Reset command holds all number generation. Triggers at page load, and upon game completion. */ 

resetCommand();

function resetCommand() {

    currentScore = 0;
    
    $("#current-score").text(currentScore);
    
    targetNumber = 0;
    
    targetNumber = Math.floor(Math.random() * 103) + 19;
    console.log("target number is " + targetNumber);
    
    $("#random-number").text(targetNumber);
    
    randomNumbers = [];
    
    for ( random = 0; random < 4; random++) {
        randomNumbers.push(Math.floor(Math.random() * 12));
    }
    
    $("#blue-gem").attr("data-crystal-value", randomNumbers[0]);
    $("#clear-gem").attr("data-crystal-value", randomNumbers[1]);
    $("#gold-gem").attr("data-crystal-value", randomNumbers[2]);
    $("#orange-gem").attr("data-crystal-value", randomNumbers[3]);
    
    console.log(randomNumbers);
    
                        }

/* holds wins and losses */

var wins = 0;
$("#wins-text").text("Wins: " + wins);

var losses = 0;
$("#loss-text").text("Losses: " + losses);


// /* Let the games begin */

$(".gems").on("click", function() {

    var gemsValue = ($(this).attr("data-crystal-value"));
    gemsValue = parseInt(gemsValue);
    console.log(gemsValue);
    currentScore += gemsValue;
    console.log("current score is now " + currentScore + ". target number is " + targetNumber + ".");
    $("#current-score").text(currentScore);

    if (currentScore == targetNumber) {
        wins++;
        $("#wins-text").text("Wins: " + wins);
        console.log("you win");
        alert("You win!");
        resetCommand();
    }

    else if (currentScore >= targetNumber) {
        losses++;
        $("#loss-text").text("Losses: " + losses);
        console.log("you lost");
        alert("Well Darn.");
        resetCommand();
    }

});


/* the very last bracket. Don't lose track of it */
});

/* This is just here so the site publishes */