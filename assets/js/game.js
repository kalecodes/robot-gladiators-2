// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// for (var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index.");
// }
var enemyHealth = 50;
var enemyAttack = 12;

// this is a function declaration (uses the function key word)
// function fight() {
//     window.alert("Welcome to Robot  Gladiators");
// };
// this is the same function as an expression
var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Prompt player: FIGHT or SKIP
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // player attacks enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // enemy attacks player
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            // money penalty for skipping
            playerMoney = playerMoney - 2;
        }
        // if no, ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

// fight();
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}