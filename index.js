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


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////
/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////

var runners = [
  { id: 1, first_name: "Charmain", last_name: "Seiler", email: "cseiler0@wired.com", shirt_size: "2XL", company_name: "Divanoodle", donation: 75 },
  { id: 2, first_name: "Whitaker", last_name: "Ierland", email: "wierland1@angelfire.com", shirt_size: "2XL", company_name: "Wordtune", donation: 148 },
  { id: 3, first_name: "Julieta", last_name: "McCloid", email: "jmccloid2@yahoo.com", shirt_size: "S", company_name: "Riffpedia", donation: 171 },
  { id: 4, first_name: "Martynne", last_name: "Paye", email: "mpaye3@sciencedaily.com", shirt_size: "XL", company_name: "Wordware", donation: 288 },
  { id: 5, first_name: "Gussy", last_name: "Raraty", email: "graraty4@ucoz.ru", shirt_size: "L", company_name: "Oozz", donation: 291 },
  { id: 6, first_name: "Yule", last_name: "Tommasetti", email: "ytommasetti5@state.gov", shirt_size: "S", company_name: "Yodo", donation: 27 },
  { id: 7, first_name: "Kathie", last_name: "Majury", email: "kmajury6@guardian.co.uk", shirt_size: "3XL", company_name: "Zoomcast", donation: 261 },
  { id: 8, first_name: "Tanner", last_name: "Branton", email: "tbranton7@tmall.com", shirt_size: "2XL", company_name: "Realmix", donation: 28 },
  { id: 9, first_name: "Sarina", last_name: "Lasham", email: "slasham8@toplist.cz", shirt_size: "XL", company_name: "Gigashots", donation: 110 },
  { id: 10, first_name: "Bertie", last_name: "Lonergan", email: "blonergan9@issuu.com", shirt_size: "3XL", company_name: "Skinte", donation: 62 },
  { id: 11, first_name: "Trevor", last_name: "Studd", email: "tstudda@networkadvertising.org", shirt_size: "S", company_name: "Cogidoo", donation: 76 },
  { id: 12, first_name: "Malachi", last_name: "Okeshott", email: "mokeshottb@chron.com", shirt_size: "M", company_name: "DabZ", donation: 91 },
  { id: 13, first_name: "Berget", last_name: "Logsdail", email: "blogsdailc@wix.com", shirt_size: "M", company_name: "Mymm", donation: 9 },
  { id: 14, first_name: "Loise", last_name: "Rivlin", email: "lrivlind@behance.net", shirt_size: "2XL", company_name: "Linktype", donation: 204 },
  { id: 15, first_name: "Christan", last_name: "Kendall", email: "ckendalle@example.com", shirt_size: "XS", company_name: "Skinix", donation: 252 },
  { id: 16, first_name: "Kayla", last_name: "Whitwam", email: "kwhitwamf@deliciousdays.com", shirt_size: "2XL", company_name: "Oyope", donation: 147 },
  { id: 17, first_name: "Heddie", last_name: "Heningam", email: "hheningamg@tripadvisor.com", shirt_size: "L", company_name: "Skinix", donation: 172 },
  { id: 18, first_name: "Mace", last_name: "Ballinger", email: "mballingerh@a8.net", shirt_size: "S", company_name: "Nlounge", donation: 266 },
  { id: 19, first_name: "Nola", last_name: "Abberley", email: "nabberleyi@jalbum.net", shirt_size: "XL", company_name: "Photospace", donation: 148 },
  { id: 20, first_name: "Nadine", last_name: "Tresler", email: "ntreslerj@marketwatch.com", shirt_size: "3XL", company_name: "Wikido", donation: 292 },
  { id: 21, first_name: "Ulrikaumeko", last_name: "Vuittet", email: "uvuittetk@gov.uk", shirt_size: "S", company_name: "Skinte", donation: 102 },
  { id: 22, first_name: "Saunder", last_name: "Spennock", email: "sspennockl@icq.com", shirt_size: "3XL", company_name: "Kwimbee", donation: 213 },
  { id: 23, first_name: "Carmel", last_name: "Woffinden", email: "cwoffindenm@wikispaces.com", shirt_size: "S", company_name: "Rooxo", donation: 137 },
  { id: 24, first_name: "Marielle", last_name: "Kimmel", email: "mkimmeln@jimdo.com", shirt_size: "M", company_name: "Livetube", donation: 96 },
  { id: 25, first_name: "Brucie", last_name: "Burris", email: "bburriso@slate.com", shirt_size: "2XL", company_name: "Wordtune", donation: 128 },
  { id: 26, first_name: "Juan", last_name: "Berzon", email: "jberzonp@soup.io", shirt_size: "3XL", company_name: "Einti", donation: 234 },
  { id: 27, first_name: "Sacha", last_name: "Olsen", email: "solsenq@reverbnation.com", shirt_size: "2XL", company_name: "Viva", donation: 190 },
  { id: 28, first_name: "Jamey", last_name: "O'Nolan", email: "jonolanr@samsung.com", shirt_size: "XL", company_name: "Skinix", donation: 31 },
  { id: 29, first_name: "Morrie", last_name: "Rainard", email: "mrainards@yale.edu", shirt_size: "XS", company_name: "Podcat", donation: 52 },
  { id: 30, first_name: "Fidel", last_name: "Roskelly", email: "froskellyt@ibm.com", shirt_size: "XS", company_name: "Avavee", donation: 5 },
  { id: 31, first_name: "Toni", last_name: "MacSweeney", email: "tmacsweeneyu@parallels.com", shirt_size: "M", company_name: "Jaloo", donation: 82 },
  { id: 32, first_name: "Jessey", last_name: "Walhedd", email: "jwalheddv@slashdot.org", shirt_size: "L", company_name: "Trilia", donation: 5 },
  { id: 33, first_name: "Karola", last_name: "Piper", email: "kpiperw@ucsd.edu", shirt_size: "3XL", company_name: "Yombu", donation: 110 },
  { id: 34, first_name: "Marley", last_name: "Mitchenson", email: "mmitchensonx@webeden.co.uk", shirt_size: "M", company_name: "Zoonoodle", donation: 97 },
  { id: 35, first_name: "Marrilee", last_name: "Thrasher", email: "mthrashery@opensource.org", shirt_size: "XL", company_name: "Bluejam", donation: 17 },
  { id: 36, first_name: "Tye", last_name: "Manie", email: "tmaniez@netscape.com", shirt_size: "L", company_name: "Kanoodle", donation: 30 },
  { id: 37, first_name: "Charleen", last_name: "Sheering", email: "csheering10@mit.edu", shirt_size: "3XL", company_name: "Jatri", donation: 262 },
  { id: 38, first_name: "Valma", last_name: "Eynaud", email: "veynaud11@archive.org", shirt_size: "XS", company_name: "Jaxbean", donation: 212 },
  { id: 39, first_name: "Dollie", last_name: "McDarmid", email: "dmcdarmid12@tinyurl.com", shirt_size: "S", company_name: "Kayveo", donation: 74 },
  { id: 40, first_name: "Minna", last_name: "Hymas", email: "mhymas13@cornell.edu", shirt_size: "XS", company_name: "Vimbo", donation: 101 },
  { id: 41, first_name: "Jsandye", last_name: "Frend", email: "jfrend14@ca.gov", shirt_size: "XS", company_name: "Latz", donation: 156 },
  { id: 42, first_name: "Yevette", last_name: "Hacket", email: "yhacket15@wp.com", shirt_size: "XL", company_name: "Lazzy", donation: 291 },
  { id: 43, first_name: "Hank", last_name: "Zebedee", email: "hzebedee16@ezinearticles.com", shirt_size: "L", company_name: "Gigashots", donation: 241 },
  { id: 44, first_name: "Jodie", last_name: "Stawell", email: "jstawell17@yale.edu", shirt_size: "S", company_name: "Jaxspan", donation: 262 },
  { id: 45, first_name: "Falito", last_name: "Karsh", email: "fkarsh18@pcworld.com", shirt_size: "S", company_name: "Mycat", donation: 239 },
  { id: 46, first_name: "Reginauld", last_name: "Purselowe", email: "rpurselowe19@thetimes.co.uk", shirt_size: "L", company_name: "Jabbersphere", donation: 11 },
  { id: 47, first_name: "Vida", last_name: "Tydd", email: "vtydd1a@dropbox.com", shirt_size: "S", company_name: "Quaxo", donation: 55 },
  { id: 48, first_name: "Anderea", last_name: "MacGiolla Pheadair", email: "amacgiollapheadair1b@xing.com", shirt_size: "2XL", company_name: "Kwimbee", donation: 214 },
  { id: 49, first_name: "Bel", last_name: "Alway", email: "balway1c@ow.ly", shirt_size: "S", company_name: "Voolia", donation: 107 },
  { id: 50, first_name: "Shell", last_name: "Baine", email: "sbaine1d@intel.com", shirt_size: "M", company_name: "Gabtype", donation: 171 },
];



/**
 * 1 ### Challenge `processLength`
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
function processLength(runners, callback) {
  /* CODE HERE */
  return callback(runners.length);
}

/**
 * 2 ### Challenge `processLastItem`
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
function processLastItem(arr, callback) {
  /* CODE HERE */
  var lastone = arr.length - 1;
  var lastone2 = arr[lastone];
  return callback(lastone2);
}

/**
 *3 ### Challenge `processSum`
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
function processSum(runners, callback) {
  /* CODE HERE */
  const sumAllNum = runners.reduce(function(accumulator, item){
  console.log(`I am the accumulator ${accumulator}`);
  console.log(`I am the current value ${item.donation}`);
  var phrase = item.donation + " is a big number!";
  return callback(phrase);
}, 0);
}

/**
 *4 ### Challenge `processProduct`
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
  /* CODE HERE */
  return callback(num1 * num2);
}

/**
 *5 ### Challenge `processContains`
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
function processContains(item, runners, callback) {
  /* CODE HERE */
  return callback(runners.contains(item) ? true : false);
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
let newrunners = [];

  runners.forEach(function(item) {
 newrunners.push(`${item.last_name}, {item.first_name}`);
 });
return newrunners;
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
  /* CODE HERE */
  let newrunners = [];

  runners.forEach(function(item) {
 newrunners.push(item.first_name.toUpperCase());
 });
return newrunners;
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
  /* CODE HERE */
const RunnerFilter = runner.filter(function(item){
  // true or false 
  return item.shirt_size.contains(tShirtSize);
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
  const sumAllNum = runners.reduce(function(accumulator, item){
  console.log(`I am the accumulator ${accumulator}`);
  console.log(`I am the current value ${item.donation}`);
  var summy = accumulator;
  return callback(accumulator);
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
  const count = 0;
  function counter() {
    for(let i = 0; i > count; i++){
       ++count;
    }
    return count;
  }
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

if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (processFirstItem) { module.exports.processFirstItem = processFirstItem }
  if (processLength) { module.exports.processLength = processLength }
  if (processLastItem) { module.exports.processLastItem = processLastItem }
  if (processSum) { module.exports.processSum = processSum }
  if (processProduct) { module.exports.processProduct = processProduct }
  if (processContains) { module.exports.processContains = processContains }
  if (processDuplicateFree) { module.exports.processDuplicateFree = processDuplicateFree }
  if (getFullNames) { module.exports.getFullNames = getFullNames }
  if (firstNamesAllCaps) { module.exports.firstNamesAllCaps = firstNamesAllCaps }
  if (getRunnersByTShirtSize) { module.exports.getRunnersByTShirtSize = getRunnersByTShirtSize }
  if (tallyUpDonations) { module.exports.tallyUpDonations = tallyUpDonations }
  if (counterMaker) { module.exports.counterMaker = counterMaker }
  if (counterMakerWithLimit) { module.exports.counterMakerWithLimit = counterMakerWithLimit }
}
