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
    // repeat and execute while the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {

        // Prompt player: FIGHT or SKIP
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to skip, confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                // money penalty for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // player attacks enemy
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
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
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// fight();
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}