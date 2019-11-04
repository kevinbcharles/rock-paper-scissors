
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
var outcome = [[0,1,2,3],["rock","tie","lose","win"],["paper","win","tie","lose"],
["scissors","lose","win","tie"]];
console.log(outcome)

buttons.forEach((button) =>{
    button.addEventListener("click", (e) =>{
        playGame(button.id);
    });
});

function alertFunction(val) {
    var button = val;
    
    result.textContent += ("You "+button);
}

function playGame(playerHand) {
    result.textContent = ("");
    let compHand = Math.ceil(Math.random()*3);
    
    if (playerHand === "rock") {
        playerHand = 1;
    };
    if (playerHand === "paper") {
        playerHand = 2;
    };
    if (playerHand === "scissors") {
        playerHand = 3;
    };
    console.log("playerHand = "+playerHand);
    console.log("compHand = "+compHand);
    console.log("outcome = "+outcome[playerHand][compHand]);

    alertFunction(outcome[playerHand][compHand]);



}
