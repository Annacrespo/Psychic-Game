

var letterIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var reset;

// main key up function
document.onkeyup = game;
function game (event) {
	var userGuess = event.key
	console.log(userGuess, document.computerGuess);
	 if (userGuess === computerGuess) {
		wins++;
		reset();
	}
	else userGuess !== computerGuess 
		document.guessesLeft--;
		document.guessesSoFar.push(userGuess);
	}
	if document.guessesLeft === 0 {
			losses++;
			reset();
		}
	}




	
//print letters on html file 
document.querySelector("#wins").innerHTML = wins;
document.querySelector("#losses").innerHTML = losses;
document.querySelector("#guessesLeft").innerHTML = document.guessesLeft;
document.querySelector("#guessesSoFar").innerHTML = document.guessesSoFar.join(",");
}
function reset () {
    document.guessesLeft = 9;
    document.guessesSoFar = [];
    document.computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// function onKeyUp (event) {
//     var userGuess = event.key;
//     console.log (userGuess, document.computerGuess);
//     if (userGuess === document.computerGuess) {
//         wins++;
//         reset();
//     } else {
//         document.guessesLeft--;
//         document.guessesSoFar.push(userGuess);
//         if (document.guessesLeft === 0) {
//             losses++;
//             reset();
//         }
//     } 
    
//     document.querySelector("#wins").innerHTML = wins;
//     document.querySelector("#losses").innerHTML = losses;
//     document.querySelector("#remaining").innerHTML = document.guessesLeft;
//     document.querySelector("#guessed").innerHTML = document.guessesSoFar.join(",");
// }

// function reset () {
//     document.guessesLeft = 9;
//     document.guessesSoFar = [];
//     document.computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// }