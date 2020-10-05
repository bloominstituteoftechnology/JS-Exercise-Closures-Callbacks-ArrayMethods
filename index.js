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
 * -Counter 1 is nested inside of the function called "counterMaker", where count2 however is not which makes it a global variable.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * -Count1 because it is nested inside of a function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *-You should use count1 if you needed a variable that you want to use in the function which can create multiple values.

 -If you have multiple functions that need to access one global variable count2 is ideal.
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

function inning(){

  return Math.round(Math.random() * 2);
}

console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());

// Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

// For example, 

// finalScore(inning, 9) might return: 
// {
//   "Home": 11,
//   "Away": 5,
// }

// */ 

function finalScore(cb, num) {
  let score ={
    home: 0,
    away: 0,
  };
  for(let i = 0; i < num; i++) {
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

function scoreboard(finalScore, inningCB, num) {
  let home = 0;
  let away = 0;
  
  for(let i = 1; i <= num; i++) {
    home += finalScore(inningCB, i).home;
    away += finalScore(inningCB, i).away;
    
    if(i == 1){console.log(`${i}st inning ${away} - ${home}`)}
else if(i == 2){console.log(`${i}st inning ${away} - ${home}`)}
else if(i == 3){console.log(`${i}st inning ${away} - ${home}`)}
else {console.log(`${i}th inning ${away} - ${home}`)}
  }
  return `Tonights final score is ${away} - ${home}`
}
               
 console.log(scoreboard(finalScore, inning, 9));

