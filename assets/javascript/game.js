// We need to make an array with the alphabet for the computer to choose from
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Create variables for our elements shown on the page, wins and losses start at zero upon page load
// Guesses are the chances a user gets to guess the correct letter, guessed is an empty array we can push our incorrect guesses into
var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];

function reset() {
    guesses = 9;
    guessed = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
}
// We use math.floor and math.random to have the computer choose a letter at random for our user to guess
let computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)


document.onkeypress = function(event) {
    let userGuess = event.key;


    if (userGuess === computerChoice) {
        wins++;
        reset();
    } else if ((userGuess !== computerChoice) && (guesses === 0)) {
        losses++;
        reset();
    }
    else {
        guesses--;
        
    } 
    // 

    if (userGuess !== computerChoice && (!guessed.includes(userGuess))) {
        guessed.push(userGuess);
    }

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guesses;
    document.getElementById('guessed').innerHTML = guessed;

}

