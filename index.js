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
//console.log;(processFirstItem);


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter one the variable is inside the function and closure happens at the return function. Counter2 the function has to look outside itself for a globalvarible.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Function one uses closure because it closes at the return function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter one would be ideal if there were multiple varibles but only one is intended to print on the console. Counter two would be ideal if it were used to count random objects.
 *
*/

// counter1 code
//function counterMaker() {
  //let count = 0;
  //return function counter1() {
    //count++;
  //}
//////}

///const counter1 = counterMaker();
//console.log(counter1);




// counter2 code
//let count = 2;

//function counter2() {
  ///return count++;
//}
//console.log(count());




/* Task 2: inning() 

Write a function inning that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

//function inning(){
  //let  number = Math.floor(Math.random() * 3);
  //return number
//}    


 //Math.floor(Math.random() * 8);
 //function inning() {
 
  //let count = inning()
  //return Math.floor(Math.random() * 3);
 
  
//console.log(count);
function inning(){
  const gameOne = 'Home'
  const gameTwo = 'Away'
  let finalInning = Math.floor(Math.random() * 2);
  let lastInning = Math.floor(Math.random() * 2);
  console.log(`${gameOne} game scored ${finalInning}`);
  console.log(`${gameTwo} game scored ${lastInning}`);
}
console.log(inning());



//*Task 3: finalScore()

//Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

//For example, 

//finalScore(inning, 9) might return: 
//{
  //const Home
  //"Away": 5,
//}

function finalScore(inning){
  const highScore = "Winning Teams"
  console.log(`${highScore} High Score Of ${inning}`);
  return inning = Math.floor(Math.random() * 9);
 
}

console.log(finalScore(9));









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

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


