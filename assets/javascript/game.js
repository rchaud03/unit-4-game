$(document).ready(function() {
////VARIABLES\\\\\\\

    // Random numbers
    var ranTarget = Math.floor(Math.random() * 120) + 19;
    
    var ranRed = Math.floor(Math.random() * 12) + 1;
    var ranBlu = Math.floor(Math.random() * 12) + 1;
    var ranYel = Math.floor(Math.random() * 12) + 1;
    var ranGre = Math.floor(Math.random() * 12) + 1;
    
    var ranNum = [ranRed, ranBlu, ranGre, ranYel]

    //gems images
    var gemInsert;
    var gems = [ "assets/images/red.png", "assets/images/blue.png","assets/images/green.png", "assets/images/yellow.png"];
    var gemId = 0;

    var userScore = 0;
    var wins = 0; var losses = 0;

    //Print random gem numbers and Targer
   //reset ();
    $("#targetNumber").text(ranTarget);
    console.log("red = "+ ranRed, "blue = " + ranBlu, "green = "+ ranGre, "yellow = "+ ranYel)

    //Create Gem buttons
    for (var j=0; j < ranNum.length; j++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        //imageCrystal.attr("src", "assets/images/"*".png");

        imageCrystal.attr("data-crystalvalue", ranNum[j]);
        $("#crystals").append(imageCrystal);
    };

// assigning images to each button
    function addGems () {
    $('img').each(function() {
        $(this).attr('id', + gemId);
        gemId++;
    });
    };

    addGems ();


    $("#0").attr("src", "assets/images/red.png");
    $("#1").attr("src", "assets/images/blue.png");
    $("#2").attr("src", "assets/images/green.png");
    $("#3").attr("src", "assets/images/yellow.png");

//    document.querySelector()
  /*  for (var k =0; k < gems.length; k++) {
        //    var gemInsert = gems[k];
            var gemInsert = gems[k];
            console.log(gemInsert);
            $(".crystal-image").attr("src", gemInsert);

    }; */

    //Click function
    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue; ///counter vs userScore
        console.log("score: " + userScore);
        $("#yourScore").text(userScore);
        
        if (userScore === ranTarget) {
            //alert("You win!!!");
            addWin ();

        }
        else if (userScore >= ranTarget) {
           // alert("You lose!!!");
           // losses++;
            addLoss();
        }
    })

    function addWin () {
        alert("You win!!!");
        wins ++;
        $("#winCount").text(wins);
       // reset ();
    }

    function addLoss () {
        alert("You lost!!!")
        losses ++;
        $("#lossCount").text(losses);
       // reset ();
    }
    function randomGems () {
    var ranRed = Math.floor(Math.random() * 12) + 1;
    var ranBlu = Math.floor(Math.random() * 12) + 1;
    var ranYel = Math.floor(Math.random() * 12) + 1;
    var ranGre = Math.floor(Math.random() * 12) + 1;
    };
/*
    function reset () {
        userScore = 0;
        randomGems ();
        $("#targetNumber").text(ranTarget);
        }; */

    })