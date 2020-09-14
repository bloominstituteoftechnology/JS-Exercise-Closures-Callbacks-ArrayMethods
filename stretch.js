//??????????????????????  iife, but why can i console log a variable inside the function and why not both?
// (function () { 
//     var a = b = 3; 
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'))

//can't read var a = whatever because you can't reach inside a function
//why can we read b = 3? is a creating a global lexical scope that houses b?
// a = b = 3 is really
// b = 3
// a = b
// so a = b is creating a backpack in the global scope to house b=3?


// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { alert(i); }, 1000 + i); //alert(i) only has access to the i after the loop is over -- backpack is not a fluid variable that updates throughout a loop
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(function(i_local) { //i_local parameter sets i up to be passed in as an argument
//       return function() { alert(i_local); } // alert function gets changing local scope
//     }(i), 1000 + i);//this (i) is where i is being passed into the iife
// }


function createBase(base) {
    return function(num) {
        return num + base;
    }
};

var addSix = createBase(6);//not same as var addSix = createBase!! you need to return a function to get addSix to work.
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// functional
// separates data and methods
// doesn’t change data -- uses methods to create new data
// declarative - lots of abstraction - bigger functions calling smaller functions to do detailed imperative steps (ex: .map, .filter, .reduce)
// supports parallel programming
// functions > data


// 	OOP 
// objects hold both data and methods
// updates data
// imperative - step by step directions (ex: writing out for loops that do the same as .map)
// doesn’t support parallel programming
// functions can have side effects
// data > functions

// functional for "data about people", OOP for "simulating people"
// "salary change" -> functional, "employee requests time off" -> OOP
