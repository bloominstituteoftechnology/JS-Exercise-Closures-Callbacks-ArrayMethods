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
 *    counter 2 itself is a function, where as counter1 is simply a variable that 
 * has been set equal to a function.
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses closure, as the variable count was set within the function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 would be best in a scenario where the variable count would need to be 
 potentially set to other values other places in the code. counter2 would be better if
 that variable is fine to be set to 0 globally. 
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

  return Math.floor(Math.random() * Math.floor(3));

}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns 
the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callBack, numberOfInnings){
  let homeInningScores = []
  let awayInningScores = []
  for (i = 0; i < numberOfInnings; i++){
    homeInningScores.push(callBack())
  }
  for (i = 0; i < numberOfInnings; i++){
    awayInningScores.push(callBack())
  }
  let homeScore = homeInningScores.reduce(function(a, b){
    return a + b;
  })
  let awayScore = awayInningScores.reduce(function(a,b){
    return a + b;
  })
  return "The home team scored " + homeScore + " points! The away team scored " + awayScore + " points!";
}
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
let homeInningScores = []
let awayInningScores = []

function getInningScore(){
  console.log("This inning, the home team scored " + homeInningScores + " runs, while the away team scored " + awayInningScores + "!")
   homeInningScores = []
   awayInningScores = []
}
function scoreboard(callBackOne, callBackTwo, numberOfInnings) {
  
    
    for (i = 0; i < numberOfInnings; i++){
      homeInningScores.push(callBackTwo())
      awayInningScores.push(callBackTwo())
      getInningScore();
    }
    
}

console.log(scoreboard(getInningScore, inning, 9))

