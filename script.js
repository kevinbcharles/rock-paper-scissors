
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const pics = document.querySelector("#pics");
const player = document.querySelector("#player");
const comp = document.querySelector("#comp");
var outcome = [[0,1,2,3],["rock","tie","lose","win"],["paper","win","tie","lose"],["scissors","lose","win","tie"]];


buttons.forEach((button) =>{
    button.addEventListener("click", (e) =>{
        playGame(button.id);
    });
});

function alertFunction(val,cval,pval) {
    var theOutcome = val;
    var compHand = cval;
    var playerHand = pval;
    let resultText = document.createElement("p");
    let playerScore = 0;
    let compScore = 0;
    const playerScoreBox = document.getElementById("playerScore");


    resultText.innerHTML += ("You throw "+ playerHand+".");
    resultText.innerHTML += ("<br>");
    resultText.innerHTML += ("Computer throws " + twoWayMap.revGet(compHand) + ".");
    resultText.innerHTML += ("<br>");
    resultText.innerHTML += ("You " + theOutcome);
    result.appendChild(resultText);
    
    
    
    
    player.innerHTML = "Player<br><br><img src='" + playerHand + ".jpg' id='playerPic' class='notclicked'>";
    comp.innerHTML = "Computer<br><br><img src='"+twoWayMap.revGet(compHand)+".jpg' style='float: right' id='compPic' class='hor notclicked'>";
    if(theOutcome === "win") {
        document.getElementById('playerPic').className = 'clicked';
        playerScore += 1;
    };
    if(theOutcome === "lose") {
        document.getElementById('compPic').className = 'hor clicked';
        compScore +=1;
    };
    if(theOutcome === "tie") {
        document.getElementById('playerPic').className = 'clicked';
        document.getElementById('compPic').className = 'hor clicked';
    };

    playerScoreBox.innerText(playerScore);

}

function image(val1, val2) {

}

function playGame(val) {
    result.textContent = ("");
    let compHand = Math.ceil(Math.random()*3);
    let playerHand = val;
    
    //console.log("playerHand = "+ twoWayMap.get(playerHand));
    //console.log("compHand = "+compHand);
    //console.log("outcome = "+outcome[playerHand][compHand]);

    alertFunction(outcome[twoWayMap.get(playerHand)][compHand],compHand, playerHand);
}

class TwoWayMap {
    constructor(map) {
        this.map = map;
        this.reverseMap = {};
        for(let key in map) {
            const value = map[key];
            this.reverseMap[value] = key;
        }
    }
    get(key) {return this.map[key];}
    revGet(key) {return this.reverseMap[key];}
};

var twoWayMap = new TwoWayMap({
    'rock' : 1,
    'paper' : 2,
    'scissors' : 3
}); //back and forth between text and num
    