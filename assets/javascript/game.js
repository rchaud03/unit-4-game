$(document).ready(function() {
////VARIABLES\\\\\\\

    // Random numbers
 /*   var ranTarget = undefined ; //Math.floor(Math.random() * 101) + 19;
 /*   var ranRed = undefined; //Math.floor(Math.random() * 12) + 1;
    var ranBlu = undefined;//Math.floor(Math.random() * 12) + 1;
    var ranYel = undefined;//Math.floor(Math.random() * 12) + 1;
    var ranGre = undefined;//Math.floor(Math.random() * 12) + 1; */
    
    var ranTarget = Math.floor(Math.random() * 101) + 19;
    var ranRed = Math.floor(Math.random() * 12) + 1;
    var ranBlu = Math.floor(Math.random() * 12) + 1;
    var ranYel = Math.floor(Math.random() * 12) + 1;
    var ranGre = Math.floor(Math.random() * 12) + 1;  // */
    var ranNum = [ranRed, ranBlu, ranGre, ranYel]

    //gems images
    var gemId = 0;

    var userScore = 0 ;
    var wins = 0; var losses = 0;
 //-----------------------------------------------------------------------------------------------------\\  
 //console.log("INIT: red = "+ ranRed, "blue = " + ranBlu, "green = "+ ranGre, "yellow = "+ ranYel);
 //console.log("Target is " + ranTarget);
 //$("#targetNumber").text(ranTarget);

   gameInit ();

    //Create Gem buttons
    function gemBuild () {
    for (var j=0; j < ranNum.length; j++) {
        var imageContainer = $("<img>");
        imageContainer.addClass("crystal-image");
        //imageContainer.attr("src", "assets/images/"*".png");                ///could never get this to work
        imageContainer.attr("data-crystalvalue", ranNum[j]);    
        $("#crystals").append(imageContainer);
    };
};

    // assigning id to each button
    function addGemID () {
        $('img').each(function() {
        $(this).attr('id', + gemId);
        gemId++;
    });
    };

    addGemID ();
    //add Gem image to each id
    function addGemID2 () {
        $("#0").attr("src", "assets/images/red.png");
        $("#1").attr("src", "assets/images/blue.png");
        $("#2").attr("src", "assets/images/green.png");
        $("#3").attr("src", "assets/images/yellow.png");
};

    //Click function
    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue; ///counter vs userScore
        console.log("score: " + userScore);
        $("#yourScore").text(userScore);
        
        if (userScore === ranTarget) {
            addWin ();
        }
        else if (userScore >= ranTarget) {
            addLoss();
        }
    });

    function addWin () {
        alert("You win!!!");
        wins ++;
        $("#winCount").text(wins);
        gameInit ();    };

    function addLoss () {
        alert("You lost!!!")
        losses ++;
        $("#lossCount").text(losses);
        gameInit ();    };

    function gameInit () {
        ranRed = Math.floor(Math.random() * 12) + 1;
        ranBlu = Math.floor(Math.random() * 12) + 1;
        ranYel = Math.floor(Math.random() * 12) + 1;
        ranGre = Math.floor(Math.random() * 12) + 1;
        ranTarget = Math.floor(Math.random() * 101) + 19;
        $("#targetNumber").text(ranTarget);
        userScore = 0;
        console.log("red = "+ ranRed, "blue = " + ranBlu, "green = "+ ranGre, "yellow = "+ ranYel);
        $("#yourScore").text(userScore);
        gemBuild ();
        //console.log("red = "+ ranRed, "blue = " + ranBlu, "green = "+ ranGre, "yellow = "+ ranYel);
        addGemID();
        addGemID2 ();
     /*   $("#0").attr("data-crystalvalue", ranRed);
        $("#1").attr("data-crystalvalue", ranBlu);
        $("#2").attr("data-crystalvalue", ranGre);
        $("#3").attr("data-crystalvalue", ranYel);*/
    }

    })