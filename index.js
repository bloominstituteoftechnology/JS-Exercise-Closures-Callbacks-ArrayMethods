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
 * - The between counter 1 and counter 2 is that counter 1 is asking for the program to return a new function that will return the count variable 1 number higher. While counter 2 is asking for a return of the count variable 1 number higher also, but within the orginal function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * - The first counter uses a closure and you can tell because the inner scopre refrences variables in its outter scope
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
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

function inning(){
  return Math.floor(Math.random() * 3);
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

function finalScore(cb, innings){
  let Home = 0;
  let Away = 0;
  for(let i = 0; i <= innings; i++){
    Home += cb()
    Away += cb()

      }
  return{
    home: Home,
    away: Away

}
};
console.log(finalScore(inning,9));

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

function scoreboard(finalScore, inning, number) {
  let Home = 0;
  let Away = 0;
    for(let i = 1; i <= number; i++){
      Home += finalScore(inning, i).home;
      Away += finalScore(inning, i).away;
      if(i == 1){console.log(`${i}st inning ${Away}-${Home}`)}
      else if(i == 2){console.log(`${i}nd inning ${Away}-${Home}`)}
      else if(i == 3){console.log(`${i}rd inning ${Away}-${Home}`)}
      else{
        console.log(`${i}th inning ${Away}-${Home}`)
      }
    }
    return `final score ${Away}-${Home}`
}

console.log(scoreboard(finalScore, inning, 9));


