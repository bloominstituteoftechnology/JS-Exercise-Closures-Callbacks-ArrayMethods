// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `firstItem`
 * 
 * @instructions
 * Implement a higher-order function called `firstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback that takes a string as its argument.
 * @returns the result of invoking the callback with the first element in the array.
 * 
 * Example of usage of this higher-order function:
 * Invoking `firstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function firstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `processLength`
 * 
 * @instructions
 * Implement a higher-order function called `processLength`.
 * It takes two arguments:
 * @param list an array with elements of any type.
 * @param callback that takes a number as its argument.
 * @returns the result of invoking the callback passing the length of the array.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processLength` passing `['foo', 'bar']` and `(num) => num + 1000`,
 * should return 1002.
 * 
 * [2] Invoking `processLength` passing `[]` and `(num) => "There are " + num`,
 * should return "There are 0".
*/
function processLength(list, callback) {
  return callback(list.length)
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (firstItem) { module.exports.firstItem = firstItem }
  if (processLength) { module.exports.processLength = processLength }
}
