

var cards = ["king", "king", "king", 
"king"];

var cardsInPlay = [];
var cardOne = cards[0]; 

console.log("User flipped queen");
cardsInPlay.push(cardOne);


var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("user flipped king");


if (cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}
