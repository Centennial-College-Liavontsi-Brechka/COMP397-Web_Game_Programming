/**
 * Created by Leonti on 2016-07-04.
 */

/* Global variables*/
var playerMoney = 1000;
var winnings = 0;
var jackpot = 5000;
var turn = 0;
var playerBet = 0;
var winNumber = 0;
var lossNumber = 0;
var winRatio = 0;
var grapes = 0;
var bananas = 0;
var oranges = 0;
var cherries = 0;
var bars = 0;
var bells = 0;
var sevens = 0;
var blanks = 0;

/* Utility function to show Player Stats */
function showPlayerStats() {
    winRatio = turn === 0 ? 0 : winNumber / turn;
    $("#jackpot").text("Jackpot: " + jackpot);
    $("#playerMoney").text("Player Money: " + playerMoney);
    $("#currentBet").text("Current bet: " + playerBet);
    $("#playerTurn").text("Turn: " + turn);
    $("#playerWins").text("Wins: " + winNumber);
    $("#playerLosses").text("Losses: " + lossNumber);
    $("#playerWinRatio").text("Win Ratio: " + (winRatio * 100).toFixed(2) + "%");
}

/* Utility function to reset all fruit tallies */
function resetFruitTally() {
    grapes = 0;
    bananas = 0;
    oranges = 0;
    cherries = 0;
    bars = 0;
    bells = 0;
    sevens = 0;
    blanks = 0;
}

/* Utility function to reset the player stats */
function resetAll() {
    playerMoney = 1000;
    winnings = 0;
    jackpot = 5000;
    turn = 0;
    playerBet = 0;
    winNumber = 0;
    lossNumber = 0;
}


/* Check to see if the player won the jackpot */
function checkJackPot() {
    /* compare two random values */
    var jackPotTry = Math.floor(Math.random() * 51 + 1);
    var jackPotWin = Math.floor(Math.random() * 51 + 1);
    if (jackPotTry == jackPotWin) {
        alert("You Won the $" + jackpot + " Jackpot!!");
        playerMoney += jackpot;
        jackpot = 1000;
    }
}

/* Utility function to show a win message and increase player money */
function showWinMessage() {
    playerMoney += winnings;
    $("div#winOrLose>p").text("You Won: $" + winnings);
    resetFruitTally();
    checkJackPot();
}

/* Utility function to show a loss message and reduce player money */
function showLossMessage() {
    playerMoney -= playerBet;
    $("div#winOrLose>p").text("You Lost!");
    resetFruitTally();
}

/* Utility function to check if a value falls within a range of bounds */
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    }
    else {
        return !value;
    }
}

/* When this function is called it determines the  */
function Reels(reelIds) {
    var outCome = [0, 0, 0];
    var baseImgUrl = "asset/img/"; // url for image loading
    var reelBgUrl = ""; // background url for reel

    for (var spin = 0; spin < reelIds.length; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);

        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):  // 41.5% probability
                reelBgUrl = baseImgUrl + "blank.png";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37): // 15.4% probability
                reelBgUrl = baseImgUrl + "grape.png";
                grapes++;
                break;
            case checkRange(outCome[spin], 38, 46): // 13.8% probability
                reelBgUrl = baseImgUrl + "banana.png";
                bananas++;
                break;
            case checkRange(outCome[spin], 47, 54): // 12.3% probability
                reelBgUrl = baseImgUrl + "orange.png";
                oranges++;
                break;
            case checkRange(outCome[spin], 55, 59): //  7.7% probability
                reelBgUrl = baseImgUrl + "cherry.png";
                cherries++;
                break;
            case checkRange(outCome[spin], 60, 62): //  4.6% probability
                reelBgUrl[spin] = baseImgUrl + "bar.png";
                bars++;
                break;
            case checkRange(outCome[spin], 63, 64): //  3.1% probability
                reelBgUrl = baseImgUrl + "bell.png";
                bells++;
                break;
            case checkRange(outCome[spin], 65, 65): //  1.5% probability
                reelBgUrl = baseImgUrl + "grape.png";
                sevens++;
                break;
        }

        $("#" + reelIds[spin]).css("background-image", "url(" + reelBgUrl + ")"); // setting background image of a real
    }
}

/* This function calculates the player's winnings, if any */
function determineWinnings() {
    if (blanks == 0) {
        if (grapes == 3) {
            winnings = playerBet * 10;
        }
        else if (bananas == 3) {
            winnings = playerBet * 20;
        }
        else if (oranges == 3) {
            winnings = playerBet * 30;
        }
        else if (cherries == 3) {
            winnings = playerBet * 40;
        }
        else if (bars == 3) {
            winnings = playerBet * 50;
        }
        else if (bells == 3) {
            winnings = playerBet * 75;
        }
        else if (sevens == 3) {
            winnings = playerBet * 100;
        }
        else if (grapes == 2) {
            winnings = playerBet * 2;
        }
        else if (bananas == 2) {
            winnings = playerBet * 2;
        }
        else if (oranges == 2) {
            winnings = playerBet * 3;
        }
        else if (cherries == 2) {
            winnings = playerBet * 4;
        }
        else if (bars == 2) {
            winnings = playerBet * 5;
        }
        else if (bells == 2) {
            winnings = playerBet * 10;
        }
        else if (sevens == 2) {
            winnings = playerBet * 20;
        }
        else if (sevens == 1) {
            winnings = playerBet * 5;
        }
        else {
            winnings = playerBet * 1;
        }
        winNumber++;
        showWinMessage();
    }
    else {
        lossNumber++;
        showLossMessage();
    }

}

/* Main logic execution*/
$(document).ready(function () {
    /* When the player clicks the spin button the game kicks off */
    $("#spinButton").click(function () {
        playerBet = $("div#betEntry>input").val();

        if (playerMoney == 0) {
            if (confirm("You ran out of Money! \nDo you want to play again?")) {
                resetAll();
                showPlayerStats();
            }
        }
        else if (playerBet > playerMoney) {
            alert("You don't have enough Money to place that bet.");
        }
        else if (playerBet < 0) {
            alert("All bets must be a positive $ amount.");
        }
        else if (playerBet <= playerMoney) {
            Reels(["reel1", "reel2", "reel3"]);
            determineWinnings();
            turn++;
            showPlayerStats();
        }
        else {
            alert("Please enter a valid bet amount");
        }
    });

    /* Resets player stats*/
    $("#resetButton").click(function () {
        resetAll();
        showPlayerStats();
    });

    /* Starts a new game*/
    $("#startGameButton").click(function () {
        $("#greetingsWrapper").css("display", "none");
        $("#gameWrapper").css("display", "block");
    });

    /* Quits from current game*/
    $("#quitButton").click(function () {
        $("#greetingsWrapper").css("display", "block");
        $("#gameWrapper").css("display", "none");
        $(".reel").css("background-image", "url(asset/img/seven.png)");
        resetAll();
        showPlayerStats();
    });
});
