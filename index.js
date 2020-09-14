// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * the difference is in counter1 the count variable is nested inside of the counterMaker function and in counter2 the count variable is declared outside of the function making it a global variable.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1 uses a closure because it has a function nested inside another function. The inner function counter uses count++, which is a variable in the outer function. It is a closure because it references a variable in its outer state (count).
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would a better scenario if you wanted to copy that specific fucntion counterMaker and assign it to a new variable such as counter1. This counter can then be used for multiple purposes while holding the count variable. 
 * 
 * Counter 2 is a more general global count and is accumulative. Since it is in the global scope, it will add 1 to its count variable every time you run the counter2 function. If you want to increase your count and ensure that it does not reset to 0, use counter 2.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(team1, team2){
  team1 = Math.floor(Math.random()*3)
  team2 = Math.floor(Math.random()*3)
  return `team1: ${team1}, team2: ${team2}` 
}

// console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings){
  return inning * numberOfInnings
}

console.log(finalScore(inning(), 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inning, numberOfInnings) {
  /* CODE HERE */
}


