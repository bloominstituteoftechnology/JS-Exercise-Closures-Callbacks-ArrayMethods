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
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////
/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////

/**
 * ### Challenge `processLength`
 *
 * @instructions
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 *
 * Implement a higher-order function called `processLength`.
 * It takes two arguments:
 * @param list an array with elements of any type.
 * @param callback function that takes a number as its argument.
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
  return callback(list.length);
}

/**
 * ### Challenge `processLastItem`
 *
 * @instructions
 * Implement a higher-order function called `processLastItem`.
 * It takes two arguments:
 * @param stringList array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the LAST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processLastItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'barbar'.
 */
function processLastItem(stringList, callback) {
  return callback(stringList[stringList.length - 1]);
}

/**
 * ### Challenge `processSum`
 *
 * @instructions
 * Implement a higher-order function called `processSum`.
 * It takes two arguments:
 * @param numberList array of numbers.
 * @param callback function that takes a number as its argument.
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
  var sum = numberList.reduce(function(sum, currentValue) {
    return sum + currentValue;
  }, 0);
  return callback(sum);
}

/**
 * ### Challenge `processProduct`
 *
 * @instructions
 * Implement a higher-order function called `processProduct`.
 * It takes three arguments:
 * @param num1 a number.
 * @param num2 a number.
 * @param callback function that takes a number as its argument.
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
  return callback(num1 * num2);
}

/**
 * ### Challenge `processContains`
 *
 * @instructions
 * Implement a higher-order function called `processContains`.
 * It takes three arguments:
 * @param item of any kind.
 * @param list array of elements of any kind.
 * @param callback function that takes a boolean as its argument.
 * @returns the result of invoking `callback` passing true if `item` exists in `list`, false otherwise.
 *
 * Examples of usage of this higher-order function:
 * [1] Invoking `processContains` passing
 * "foo" and `['foo', 'bar']` and `(bool) => bool ? 'nice!' : 'sad'`
 * should return "nice!".
 *
 * [2] Invoking `processContains` passing
 * "lady gaga" and `['foo', 'bar']` and `(bool) => bool ? 'nice!' : 'sad'`,
 * should return "sad".
 */
function processContains(item, list, callback) {
  // return callback(() => {
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i] === item) {
  //       return true;
  //     }
  //   }
  //   return false;
  // });
  return callback(list.includes(item));
}

/**
 * ### Challenge `processDuplicateFree`
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 *
 * @instructions
 * Implement a higher-order function called `processDuplicateFree`.
 * It takes two arguments:
 * @param list array of elements of any kind.
 * @param callback function that takes an array as its argument.
 * @returns the result of invoking `callback` passing a de-duped version of `list`.
 *
 * Examples of usage of this higher-order function:
 * [1] Invoking `processDuplicateFree` passing `[1,1,1,2]` and `(arr) => arr`,
 * should return `[1,2]`.
 *
 * [2] Invoking `processDuplicateFree` passing `[1,1,2,2,3]` and `(arr) => arr.length`,
 * should return 3.
 */
function processDuplicateFree(/* CODE HERE ONLY AFTER COMPLETING ALL OTHER TASKS */) {
  /* CODE HERE ONLY AFTER COMPLETING ALL OTHER TASKS */
}

/////////////// HIGHER-ORDER ARRAY METHODS ///////////////
/////////////// HIGHER-ORDER ARRAY METHODS ///////////////

// A local community center is holding a fund raising 5k fun run and has invited
// 50 small businesses to make a small donation on their behalf for some much needed
// updates to their facilities. Each business has assigned a representative
// to attend the event along with a small donation.

/**
 * ### Challenge `getFullNames`
 *
 * @instructions
 * Implement this function using forEach().
 *
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' full names in the following format: "Smith, John".
 * The full names appear in the array in the same order the runners appear in the `runners` array.
 */
function getFullNames(runners) {
  let runnersNames = [];

  runners.forEach(function(index) {
    runnersNames.push(`${index.last_name}, ${index.first_name}`);
  });
  return runnersNames;
}

/**
 * ### Challenge `firstNamesAllCaps`
 *
 * @instructions
 * The event director needs to have all the runners' first names
 * in uppercase because the director BECAME DRUNK WITH POWER.
 * Implement this function using map().
 *
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' first names in ALL CAPS.
 * The first names appear in the array in the same order the runners appear in the `runners` array.
 */
function firstNamesAllCaps(runners) {
  return runners.map(function(index) {
    return index.first_name.toUpperCase();
  });
}

/**
 * ### Challenge `getRunnersByTShirtSize`
 *
 * @instructions
 * The event director needs a way to find the runners that need
 * a specific t-shirt size, so they can place the orders easily.
 * Implement this function using filter().
 *
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @param tShirtSize string (possible values are "S", "M", "L", "XL", "2XL", "3XL").
 * @returns an array containing only the runners that use the given `tShirtSize`.
 * The runners in the array appear in the same order they appear in the `runners` array.
 */
function getRunnersByTShirtSize(runners, tShirtSize) {
  return runners.filter(function(index) {
    return index.shirt_size === tShirtSize;
  });
}

/**
 * ### Challenge `tallyUpDonations`
 *
 * @instructions
 * The donations need to be tallied up and reported for tax purposes.
 * Implement this function using reduce().
 *
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns a number which is the sum of the donations by all runners.
 */
function tallyUpDonations(runners) {
  return runners.reduce(function(sum, currentValue) {
    return sum + currentValue.donation;
  }, 0);
}

/////////////// CLOSURES ///////////////
/////////////// CLOSURES ///////////////

/**
 * ### Challenge `counterMaker`
 *
 * @instructions
 * Fix this function so a counter produced with it will increment correctly!
 * Usage is as follows:
 *
 * const counter = counterMaker()
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * etc
 */
function counterMaker() {
  // BROKEN CODE STARTS
  let count = function counter() {
    return ++count;
  };
  return count();
  // BROKEN CODE ENDS
}

/**
 * ### Challenge `counterMakerWithLimit`
 *
 * @instructions
 * Implement a counter maker that takes a max value for the count.
 * A counter created with it will reset itself after reaching the max value.
 * Usage is as follows:
 *
 * const counter = counterMakerWithLimit(3)
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * etc
 */
function counterMakerWithLimit(/* CODE HERE */) {
  /* CODE HERE */
}

/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////

if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {};
  if (processFirstItem) {
    module.exports.processFirstItem = processFirstItem;
  }
  if (processLength) {
    module.exports.processLength = processLength;
  }
  if (processLastItem) {
    module.exports.processLastItem = processLastItem;
  }
  if (processSum) {
    module.exports.processSum = processSum;
  }
  if (processProduct) {
    module.exports.processProduct = processProduct;
  }
  if (processContains) {
    module.exports.processContains = processContains;
  }
  if (processDuplicateFree) {
    module.exports.processDuplicateFree = processDuplicateFree;
  }
  if (getFullNames) {
    module.exports.getFullNames = getFullNames;
  }
  if (firstNamesAllCaps) {
    module.exports.firstNamesAllCaps = firstNamesAllCaps;
  }
  if (getRunnersByTShirtSize) {
    module.exports.getRunnersByTShirtSize = getRunnersByTShirtSize;
  }
  if (tallyUpDonations) {
    module.exports.tallyUpDonations = tallyUpDonations;
  }
  if (counterMaker) {
    module.exports.counterMaker = counterMaker;
  }
  if (counterMakerWithLimit) {
    module.exports.counterMakerWithLimit = counterMakerWithLimit;
  }
}
