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
 * 
 * Counter 1 has a local variable inside its function that can not be accessed outside the function.
 * Counter 2 uses a global variable inside its function to 
 *
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * The second uses a closure. It has a variable that it calls upon that is directly inside its function,
 * and it also executes the function with return. The first one does not complete a function as there is
 * no return command. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *   
 *  Counter1 would be preferable if the count variable is not to be used ever again in the script. We want
 * to keep the code as clean as possible. We don't want a variable hanging out with no purpose. 
 * The counter2 code would be useful if we plan on using the count variable down the line in our code.
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

function inning(/*Code Here*/){
  const randomScore = Math.floor(Math.random() * 3);
  return randomScore;
 }

console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, num){
  
  let score1 = 0;
  let score2 = 0;
 
  for(let i = 0; i < num; i++){
    score1 = score1 + inning()
    score2 = score2 + inning()
  }
  

  let inningCount =
    {
      home: score1,
      away: score2,
    }

  return inningCount;
};

console.log(finalScore(inning, 9))
  

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

function scoreboard(getInningScore, whichInning, num) {
  let twoScores = [];
  for(let i = 0; i < num; i++){
    twoScores.push(`Innings ${i+1}: ${getInningScore(whichInning, 1)}`);
  }
  return twoScores;
 }

console.log(scoreboard(finalScore, inning, 9));



