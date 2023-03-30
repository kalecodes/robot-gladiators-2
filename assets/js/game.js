
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// this is a function declaration (uses the function key word)
// function fight() {
//     window.alert("Welcome to Robot  Gladiators");
// };
// this is the same function as an expression
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Player attack and update enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    // Log result
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Enemy attack and update playetHealth
    playerHealth = playerHealth - enemyAttack;
    // Log result
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};

fight();