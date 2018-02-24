$(document).ready(function() {

    playGame();

    function playGame() {
        // function initGame() {
        let wins = 0;
        let lose = 0;
        // }
        let cOne = crystalNumFunc();
        // $("#btn1").attr("value", cOne);
        let cTwo = crystalNumFunc();
        // $("#btn2").attr("value", cTwo);
        let cThree = crystalNumFunc();
        // $("#btn3").attr("value", cThree);
        let cFour = crystalNumFunc();
        // $("#btn4").attr("value", cFour);
        let crystalNum = 0;

        $("#counters").text("wins: " + wins + "  " + "losses: " + lose);
        let crystals = [cOne, cTwo, cThree, cFour];

        let total = 0; //player total
        $("#totalScore").text("Your Total: " + total);
        // playGame();

        let gameNum = gameRandNum(); // rand num shown to beat
        $("#gameNumber").text("Number to match: " + gameNum);
        console.log(gameNum);


        function gameRandNum() {
            var number = 19 + Math.floor(Math.random() * 126)
            return number
        }

        function reset() {
            // initGame();
            let cOne = crystalNumFunc();
            $("#btn1").attr("value", cOne);
            let cTwo = crystalNumFunc();
            $("#btn2").attr("value", cTwo);
            let cThree = crystalNumFunc();
            $("#btn3").attr("value", cThree);
            let cFour = crystalNumFunc();
            $("#btn4").attr("value", cFour);
            //counters
            // $("#counters").text("wins: " + wins + "  " + "losses: " + lose);

            let gameNum = gameRandNum(); // rand num shown to beat
            $("#gameNumber").text("Number to match: " + gameNum);

            // let beatNum = 0; //number shown to beat
            let total = 0; //player total
            $("#totalScore").text("Your Total: " + total);
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

        createCrystals();


        // $('.gem').on("click", function() {
        //     crystalNum = $(this).attr("value")
        //     total = total + parseInt(crystalNum);
        //     $("#totalScore").text("Your Total: " + total);

        // });
        $('#btn1').click(function() {
            total = total + cOne;
            $("#totalScore").text("Your Total: " + total);
        });

        $('#btn2').on('click', function() {
            total = total + cTwo;
            $("#totalScore").text("Your Total: " + total);
        });

        $('#btn3').on('click', function() {
            total = total + cThree;
            $("#totalScore").text("Your Total: " + total);
        });

        $('#btn4').on('click', function() {
            total = total + cFour;
            $("#totalScore").text("Your Total: " + total);
        });


        if (gameNum === total) {
            wins = wins + 1;
            $("#wins").text(wins);
            reset();
        }

        if (total >= gameNum) {
            lose = lose + 1;
            $("#lose").text(lose);
            reset();
        }

        $('reset').on('click', function() {
            reset();
            playGame();
        });

    }

    // $('newGame').on('click', function() {
    //     reset();
    // });
    // }

});