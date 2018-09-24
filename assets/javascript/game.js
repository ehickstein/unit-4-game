window.onload = function(){
    let randomNumber = Math.floor(Math.random() * 101) + 19;
    let userNumber = 0;
    let wins = 0;
    let losses = 0;
    let crystalNumber = ['1','2','3','4','5','6','7','8','9','10','11','12'];

    $("#randomNumber").text(randomNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);


    function crystalAtt(num){
        var tmp = crystalNumber.slice(crystalNumber);
        var ret = [];
        
        for (var i = 0; i < num; i++) {
            var index = Math.floor(Math.random() * tmp.length);
            var removed = tmp.splice(index, 1);
            ret.push(removed[0]);
        }
        return ret;  
    }

    let crystalArray = crystalAtt(4);

    console.log(crystalArray);

    for(i=0; i < 4; i++){

        let imageCrystal1 = $("<img>");

        imageCrystal1.addClass("crystal-image");

        imageCrystal1.attr("src", "assets/images/crystal1.jpg");

        imageCrystal1.attr("data-crystalvalue", crystalArray[i]);

        $("#crystals").append(imageCrystal1);

    }

    $(document).on("click", ".crystal-image", function(){
        let crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        userNumber += crystalValue;
        $("#userNumber").text(userNumber);

        if(userNumber > randomNumber){
            alert("You lose! Try again.");
            losses ++;
            $("#losses").text(losses);
            newGame();
        }
        if(userNumber === randomNumber){
            alert("Congratulations, you win!");
            wins ++;
            $("#wins").text(wins);
            newGame();
        }
    });
    function newGame(){
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#randomNumber").text(randomNumber);
        userNumber = 0
    }
    //Using this method of generating a non-repeating array, I cannot find a way to replace the values of each crystal.
};