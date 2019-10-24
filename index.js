// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback that takes a string as its argument.
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
 * @returns the result of invoking `callback` passing the LENGTH of `list`.
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

/**
 * ### Challenge `processLastItem`
 * 
 * @instructions
 * Implement a higher-order function called `processLastItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback that takes a string as its argument.
 * @returns the result of invoking `callback` with the LAST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processLastItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'barbar'.
*/
function processLastItem(stringList, callback) {
  return callback(stringList[stringList.length - 1])
}

/**
 * ### Challenge `processSum`
 * 
 * @instructions
 * Implement a higher-order function called `processSum`.
 * It takes two arguments:
 * @param numberList an array of numbers.
 * @param callback that takes a number as its argument.
 * @returns the result of invoking `callback` passing the SUM of all elements in `numberList`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processSum` passing `[10, 20, 30]` and `(num) => num + " is a big number!"`,
 * should return "60 is a big number!".
 * 
 * [2] Invoking `processSum` passing `[]` and `(num) => num + 1000`,
 * should return 1000.
*/
function processSum(numberList, callback) {
  const sum = numberList.reduce((acc, e) => acc + e, 0)
  return callback(sum)
}

/**
 * ### Challenge `processProduct`
 * 
 * @instructions
 * Implement a higher-order function called `processProduct`.
 * It takes three arguments:
 * @param num1 a number.
 * @param num2 a number.
 * @param callback that takes a number as its argument.
 * @returns the result of invoking `callback` passing the PRODUCT of `num1` and `num2`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processProduct` passing 2 and 7 and `(num) => num + " is a big number!"`,
 * should return "14 is a big number!".
 * 
 * [2] Invoking `processProduct` passing 25 and 0 and `(num) => num + 1000`,
 * should return 1000.
*/
function processProduct(num1, num2, callback) {
  return callback(num1 * num2)
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////

if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (processFirstItem) { module.exports.processFirstItem = processFirstItem }
  if (processLength) { module.exports.processLength = processLength }
  if (processLastItem) { module.exports.processLastItem = processLastItem }
  if (processSum) { module.exports.processSum = processSum }
  if (processProduct) { module.exports.processProduct = processProduct }
}
