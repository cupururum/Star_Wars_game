var yourCharacter;
var yourEnemy;
var youChoseCharacter;
var attackPower;
var counterAttack;
var healthPointsYourCharacter;
var healthPointsYourEnemy;
var healthPointsDecreaseEnemy = 0;
var attackIncrease = 0;
var $healthPointsEnemyP;
var $healthPointsCharacterP;
youChoseCharacter = false;
yourCharacter = false;
yourEnemy = false;


function continueGame(healthPointsYourCharacter) {
  youChoseCharacter = true;
  $(".fightSectionDefend").empty()
  $(".enemiesAvailibleToAttack").on("click", function(){
        if (youChoseCharacter) {
            yourEnemy = $(this);
            console.log("your Enemy: ", yourEnemy)
            $(this).detach();
            $(".fightSectionDefend").append(this);
            $(this).removeClass("enemiesAvailibleToAttack").addClass("yourChosenEnemy")
            counterAttack = $(".yourChosenEnemy").data("counterattack");
            healthPointsYourEnemy = $(".yourChosenEnemy").data("healthpoints")
            $healthPointsEnemyP = $(this).find("p.healthPointsP");
            console.log("$healthPointsEnemyP: ",$healthPointsEnemyP)
            console.log("counterAttack: ", counterAttack)
            console.log("healthPointsYourEnemy: ", healthPointsYourEnemy)
          }

          if (yourEnemy) {
            $(".enemiesAvailibleToAttack").off("click")
          }

          $(".attack").on("click", function(){

            attackIncrease = attackIncrease + attackPower;
            healthPointsYourEnemy = healthPointsYourEnemy - attackIncrease;
            //healthPointsDecreaseEnemy = healthPointsDecreaseEnemy - attackIncrease;
            $healthPointsEnemyP.text(healthPointsYourEnemy)
            console.log("HP enemy: ", healthPointsYourEnemy);
            $()
            console.log("Increase of the attack: ", attackIncrease);
            healthPointsYourCharacter = healthPointsYourCharacter - counterAttack;
            $healthPointsCharacterP.text(healthPointsYourCharacter);
            console.log("healthPointsDecreaseCharachter: ", healthPointsYourCharacter)


            if (healthPointsYourEnemy <= 0) {
              console.log("You win!")
              $(".attack").off("click");
              console.log("Choose the next enemy")
              continueGame(healthPointsYourCharacter);

            } else if (healthPointsYourCharacter <= 0) {
              console.log("You lost!")
              $(".attack").off("click");
            }
          });

        });


}

function startAgainGame() {

}

function game() {
  $(".chooseFighter").on("click", function(){
        if (youChoseCharacter) {
            yourEnemy = $(this);
            console.log("your Enemy: ", yourEnemy)
            $(this).detach();
            $(".fightSectionDefend").append(this);
            $(this).removeClass("enemiesAvailibleToAttack").addClass("yourChosenEnemy")
            counterAttack = $(".yourChosenEnemy").data("counterattack");
            healthPointsYourEnemy = $(".yourChosenEnemy").data("healthpoints")
            $healthPointsEnemyP = $(this).find("p.healthPointsP");
            console.log("$healthPointsEnemyP: ",$healthPointsEnemyP)
            console.log("counterAttack: ", counterAttack)
            console.log("healthPointsYourEnemy: ", healthPointsYourEnemy)


        } else {
            yourCharacter = $(this);
            console.log("your Character: ", yourCharacter)
            $(this).detach();
            $(".fightSectionAttack").append(this);
            $(this).removeClass("chooseFighter").addClass("yourChosenCharacter")
            $(".chooseCharacterH2").text("Enemies Availible To Attack ")
            $(".chooseFighter").removeClass("chooseFighter").addClass("enemiesAvailibleToAttack")
            youChoseCharacter = true;
            attackPower = $(".yourChosenCharacter").data("attack");
            healthPointsYourCharacter = $(".yourChosenCharacter").data("healthpoints")
            $healthPointsCharacterP = $(this).find("p.healthPointsP");
            console.log("$healthPointsCharacterP: ",$healthPointsCharacterP)
            console.log("attackPower: ", attackPower)
            console.log("healthPointsYourCharacter: ", healthPointsYourCharacter)

          }

          if (yourEnemy && yourCharacter) {
            console.log("Ready to start Game");
            //$(".enemiesAvailibleToAttack").off("click");
            $(".enemiesAvailibleToAttack,.yourChosenEnemy,.yourChosenCharacter").off("click");
          }
    });

    $(".attack").on("click", function(){

      attackIncrease = attackIncrease + attackPower;
      healthPointsYourEnemy = healthPointsYourEnemy - attackIncrease;
      //healthPointsDecreaseEnemy = healthPointsDecreaseEnemy - attackIncrease;
      $healthPointsEnemyP.text(healthPointsYourEnemy)
      console.log("HP enemy: ", healthPointsYourEnemy);
      $()
      console.log("Increase of the attack: ", attackIncrease);
      healthPointsYourCharacter = healthPointsYourCharacter - counterAttack;
      $healthPointsCharacterP.text(healthPointsYourCharacter);
      console.log("healthPointsDecreaseCharachter: ", healthPointsYourCharacter)


      if (healthPointsYourEnemy <= 0) {
        console.log("You win!")
        $(".attack").off("click");
        console.log("Choose the next enemy")
        continueGame(healthPointsYourCharacter);

      } else if (healthPointsYourCharacter <= 0) {
        console.log("You lost!")
        $(".attack").off("click");
      }
    });
}

game();
