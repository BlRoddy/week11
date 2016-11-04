var wordsToGuess = ['zebra', 'snake', 'dog', 'cat', 'unicorn', 'poodle'];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
exports.randomWord = randomWord;