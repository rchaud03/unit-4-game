

$(document).ready(function() {

//Declaring variables
  var ranTarget = Math.floor(Math.random() * 50) + 19;
  var ranRed = Math.floor(Math.random() * 12) + 1;
  var ranBlu = Math.floor(Math.random() * 12) + 1;
  var ranYel = Math.floor(Math.random() * 12) + 1;
  var ranGre = Math.floor(Math.random() * 12) + 1;
  var userScore = redScore + bluScore + greScore + yelScore;
  var redCount = 0;
  var bluCount = 0;
  var greCount = 0;
  var yelCount = 0;
  var redScore = 0;
  var bluScore = 0;
  var greScore = 0;
  var yelScore = 0;
  var wins = 0;
  var losses = 0;

//TrouubleShooting Consoles
    console.log("Target number is " + ranTarget);
    console.log("Red random number is " + ranRed);
    console.log("Blue random number is " + ranBlu);
    console.log("Green random number is " + ranGre);        
    console.log("Yellow random number is " + ranYel);

//Write the target number to the HTML
    //document.querySelector("#targetNumber").innerHTML = (" " + ranTarget);
    $("#targetNumber").text(ranTarget);

//When you click red
    $("#red").on("click", function () {
        console.log("red adds " + ranRed);
        redCount ++;
        redScore = redCount * ranRed;
        userScore = redScore + bluScore + greScore + yelScore;
        console.log("redScore=" + redScore);
        console.log("redCount=" + redCount);
        console.log("Total score = " + userScore);
        scoreWatch ();
        yourScore ();
    })
//WHen you click blue
    $("#blu").on("click", function () {
        console.log("blu adds " + ranBlu);
        bluCount ++;
        bluScore = bluCount * ranBlu;
        userScore = redScore + bluScore + greScore + yelScore;
        console.log("bluScore=" + bluScore);
        console.log("bluCount=" + bluCount);
        console.log("Total score = " + userScore);
        scoreWatch ();
        yourScore ();
    })

//When you click green
    $("#gre").on("click", function () {
        console.log("green adds " + ranGre);
        greCount ++;
        greScore = greCount * ranGre;
        userScore = redScore + bluScore + greScore + yelScore;
        console.log("greScore=" + greScore);
        console.log("greCount=" + greCount);
        console.log("Total score = " + userScore);
        scoreWatch ();
        yourScore ();
    })

//When you click yellow
    $("#yel").on("click", function () {
        console.log("yellow adds " + ranYel);
        yelCount ++;
        yelScore = yelCount * ranYel;
        userScore = redScore + bluScore + greScore + yelScore;
        console.log("yelScore=" + yelScore);
        console.log("yelCount=" + yelCount);
        console.log("Total score = " + userScore);
        scoreWatch ();
        yourScore ();
    })


//Declaring functions to be called
    var scoreWatch = function () {
        if (userScore > ranTarget) {
        addLoss ();
        }
        else if (userScore === ranTarget) {
            addWin();
    }}

    var yourScore = function () {
        document.querySelector("#yourScore").innerHTML = " " + userScore;
    }
    
    var addWin = function () {
        wins ++;
        $("#winCount").text(wins);
        alert("You won!!!");
        resetStats ();
    }
    var addLoss = function () {
        losses ++;
        $("#lossCount").text(losses);
        alert("You lost!!!");
        resetStats ();
    }

    var resetStats = function () {

        ranTarget = Math.floor(Math.random() * 50) + 19;
        ranRed = Math.floor(Math.random() * 12) + 1;
        ranBlu = Math.floor(Math.random() * 12) + 1;
        ranYel = Math.floor(Math.random() * 12) + 1;
        ranGre = Math.floor(Math.random() * 12) + 1;
        userScore = 0;
        redCount = 0;
        bluCount = 0;
        greCount = 0;
        yelCount = 0;
        redScore = 0;
        bluScore = 0;
        greScore = 0;
        yelScore = 0;


        console.log("Target number is " + ranTarget);
        console.log("Red random number is " + ranRed);
        console.log("Blue random number is " + ranBlu);
        console.log("Green random number is " + ranGre);            
        console.log("Yellow random number is " + ranYel);

        $("#targetNumber").text(ranTarget);

    }
})
