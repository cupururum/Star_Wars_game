var yourCharacter;
var yourEnemy;
var youChoseCharacter;
var attackYoda = 8;
var attackQuiGon = 5;
var attackWader = 25;
var attackRen = 4;




function startGame() {
  yourCharacter = false;
  yourEnemy = false;
  youChoseCharacter = false;

  $(".chooseFighter").on("click", function(){
    if (youChoseCharacter) {
        yourEnemy = $(this);
        console.log("your Enemy: ", yourEnemy)
        $(this).detach();
        $(".fightSectionDefend").append(this);
        $(this).removeClass("enemiesAvailibleToAttack").addClass("yourChosenEnemy")

    } else {
        yourCharacter = $(this);
        console.log("your Character: ", yourCharacter)
        $(this).detach();
        $(".fightSectionAttack").append(this);
        $(this).removeClass("chooseFighter").addClass("yourChosenCharacter")
        $(".chooseCharacterH2").text("Enemies Availible To Attack ")
        $(".chooseFighter").removeClass("chooseFighter").addClass("enemiesAvailibleToAttack")
        youChoseCharacter = true;
      }

      if (yourEnemy && yourCharacter) {
        console.log("Ready to start Game");
        $(".enemiesAvailibleToAttack").off("click");
      }

      function yodaAttack() {

      };

      $(".attack").on("click", function(){


      });

    });
}

startGame()
