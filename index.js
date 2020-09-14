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
 *    counter1 uses a closure to store the value; counter2 uses a global variable
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    counter1 uses a closure because there's a nested function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counter1 is good if you have one function that can create multiple values
 *  counter 2 is good if you have multiple functions that need to access one global variable 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;  // count is protected inside function
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker(); //can set up multiple counters w/ one function
                                
// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.round(Math.random() * 2);
}

console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, num){
  let score = {
    home: 0,
    away: 0,
  };
  for (let i = 0; i < num; i++) {
    score.home += cb();
    score.away += cb();
  }
  return score;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each point in the game, like so:

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

function getInningScore(home, away, num) {
  let ordinal = "";
  if (num === 1) {
    ordinal = "1st";
  }
  else if (num === 2) {
    ordinal = "2nd";
  }
  else if (num === 3) {
    ordinal = "3rd";
  }
  else ordinal = `${num}th`;

  return `${ordinal} inning: ${away} - ${home}`
}

function scoreboard(cb1, cb2, num) {
  let finalHome = 0;
  let finalAway = 0;
  for (let i = 0; i < num; i++) {
    let home = cb1();
    let away = cb1();
    finalHome += home;
    finalAway += away;
    console.log(getInningScore(home, away, i+1));
  }
  console.log(`Final score: ${finalAway} - ${finalHome}`)
}

scoreboard(inning, getInningScore, 9);
