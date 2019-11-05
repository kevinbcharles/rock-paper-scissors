
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const pics = document.querySelector("#pics");
const player = document.querySelector("#player");
const comp = document.querySelector("#comp");
var outcome = [[0,1,2,3],["rock","tie","lose","win"],["paper","win","tie","lose"],
["scissors","lose","win","tie"]];

buttons.forEach((button) =>{
    button.addEventListener("click", (e) =>{
        playGame(button.id);
    });
});

function alertFunction(val,cval) {
    var theOutcome = val;
    var compHand = cval;
    var scissorPic = document.createElement("img");
    var rockPic = document.createElement("img");
    var paperPic = document.createElement("img");
    scissorPic.src = "https://st2.depositphotos.com/5811644/11354/i/950/depositphotos_113545414-stock-photo-old-rusty-scissors-isolated-on.jpg";
    rockPic.src = "https://media2.fdncms.com/pittsburgh/imager/u/original/3507194/the_rock.jpg"
    paperPic.src = "https://st2.depositphotos.com/2048845/11207/i/950/depositphotos_112075204-stock-photo-failing-grade-on-exam-or.jpg"
    
    
    
    result.textContent += ("Computer throws " + twoWayMap.revGet(compHand) + ". " + "You " + theOutcome);
    //player.appendChild(window[playerHand + "Pic"]);
    compPic = twoWayMap.revGet(compHand) + "Pic";
    console.log("compPic = "+compPic)
    comp.src = "scissor.jpg";
    comp.appendChild(comp);

}

function image(val1, val2) {

}

function playGame(playerHand) {
    result.textContent = ("");
    let compHand = Math.ceil(Math.random()*3);
    
    
    //console.log("playerHand = "+ twoWayMap.get(playerHand));
    //console.log("compHand = "+compHand);
    //console.log("outcome = "+outcome[playerHand][compHand]);

    alertFunction(outcome[twoWayMap.get(playerHand)][compHand],compHand);
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
    