$(document).ready(function() {
    let gameNum;
    let total;
    let cOne;
    let cTwo;
    let cThree;
    let cFour;
    let crystals;
    let crystalNum;
    let wins = 0;
    let lose = 0;

    function reset() {
        // initGame();
        // cOne = 0;
        // cTwo = 0;
        // cThree = 0;
        // cFour = 0;
        //assign a value to each button
        cOne = crystalNumFunc();
        $("#btn1").attr("value", cOne);
        cTwo = crystalNumFunc();
        $("#btn2").attr("value", cTwo);
        cThree = crystalNumFunc();
        $("#btn3").attr("value", cThree);
        cFour = crystalNumFunc();
        $("#btn4").attr("value", cFour);
        //counters
        // $("#counters").text("wins: " + wins + "  " + "losses: " + lose);

        gameNum = gameRandNum(); // rand num shown to beat
        $("#gameNumber").text("Number to match: " + gameNum);

        // let beatNum = 0; //number shown to beat
        total = 0; //player total
        $("#totalScore").text("Your Total: " + total);

    }

    function gameRandNum() {
        var number = 19 + Math.floor(Math.random() * 126)
        return number
    }

    function crystalNumFunc() {
        var n = 1 + Math.floor(Math.random() * 12);
        return n;
    }

    function gameRandNum() {
        var number = 19 + Math.floor(Math.random() * 126)
        return number
    }

    function createCrystals() {
        for (let i = 0; crystals[i] < crystals.length; i++) {
            var crysBtn = $("<button>");
            crysBtn.addClass("btn btn-secondary btn-lg");
            crysBtn.attr("data-letter", createCrystals());
            $("#btn").append(crysBtn);
            console.log("btn");
        }
    }

    cOne = crystalNumFunc();
    $("#btn1").attr("value", cOne);
    cTwo = crystalNumFunc();
    $("#btn2").attr("value", cTwo);
    cThree = crystalNumFunc();
    $("#btn3").attr("value", cThree);
    cFour = crystalNumFunc();
    $("#btn4").attr("value", cFour);

    $("#counters").text("wins: " + wins + "  " + "losses: " + lose);
    crystals = [cOne, cTwo, cThree, cFour];

    total = 0; //player total
    $("#totalScore").text("Your Total: " + total);
    // playGame();

    gameNum = gameRandNum(); // rand num shown to beat
    $("#gameNumber").text("Number to match: " + gameNum);
    console.log(gameNum);

    createCrystals();

    $('#btn1').click(function() {
        total = total + cOne;
        $("#totalScore").text("Your Total: " + total);
        console.log("blue: " + cOne, total);
        if (gameNum === total) {
            wins = wins + 1;
            $("#counters").text("wins: " + wins + "  " + "loses: " + lose);
            reset();
        }
        if (total >= gameNum) {
            lose = lose + 1;
            $("#counters").text("wins: " + wins + "  " + "loses: " + lose);
            reset();
        }
    });

    $('#btn2').on('click', function() {
        total = total + cTwo;
        $("#totalScore").text("Your Total: " + total);
        console.log("red: " + cTwo, total);

        if (gameNum === total) {
            wins = wins + 1;
            $("#counters").text("wins: " + wins + "  " + "loses: " + lose);
            reset();
        }
        if (total >= gameNum) {
            lose = lose + 1;
            $("#counters").text("wins: " + wins + "  " + "loses: " + lose);
            reset();
        }
    });

    $('#btn3').on('click', function() {
        total = total + cThree;
        $("#totalScore").text("Your Total: " + total);
        console.log("green: " + cThree, total);

        if (gameNum === total) {
            wins = wins + 1;
            $("#counters").text("wins: " + wins + "  " + "loses: " + lose);
            reset();
        }
        if (total >= gameNum) {
            lose = lose + 1;
            $("#counters").text("wins: " + wins + "  " + "loses: " + lose);
            reset();
        }
    });

    $('#btn4').on('click', function() {
        total = total + cFour;
        $("#totalScore").text("Your Total: " + total);
        console.log("yellow: " + cFour, total);

        if (gameNum === total) {
            wins = wins + 1;
            $("#counters").text("wins: " + wins + "  " + "loses: " + lose);
            reset();
        }
        if (total >= gameNum) {
            lose = lose + 1;
            $("#counters").text("wins: " + wins + "  " + "loses: " + lose);
            reset();
        }
    });

});