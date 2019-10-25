////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////

/* eslint-env mocha */
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env

  var chai = require("chai");
  var runners = require('../data/runners');

  var {
    processFirstItem,
    processLength,
    processLastItem,
    processSum,
    processProduct,
    processContains,
    processDuplicateFree,
    getFullNames,
    firstNamesAllCaps,
    getRunnersByTShirtSize,
    tallyUpDonations,
  } = require("../index.js");
}
var expect = chai.expect;

describe("processFirstItem()", () => {
  it("works as specified", () => {
    expect(processFirstItem(['bar', 'baz'], str => str + str)).to.equal('barbar');
    expect(processFirstItem(['bar', 'baz'], str => str[0])).to.equal('b');
  });
});

describe("processLength()", () => {
  it("works as specified", () => {
    expect(processLength(['bar', 'baz'], n => n * 3)).to.equal(6);
    expect(processLength(['bar'], n => n * 3)).to.equal(3);
    expect(processLength([], n => n * 3)).to.equal(0);
  });
});

describe("processLastItem()", () => {
  it("works as specified", () => {
    expect(processLastItem(['bar', 'baz'], str => str + str)).to.equal('bazbaz');
    expect(processLastItem(['bar', 'foo'], str => str[0])).to.equal('f');
  });
});

describe("processSum()", () => {
  it("works as specified", () => {
    expect(processSum([1, 2, 3], n => n + 1000)).to.equal(1006);
    expect(processSum([1], n => n + 1000)).to.equal(1001);
    expect(processSum([], n => n + 1000)).to.equal(1000);
  });
});

describe("processProduct()", () => {
  it("works as specified", () => {
    expect(processProduct(2, 3, n => n + 1000)).to.equal(1006);
    expect(processProduct(0, 9, n => n + 1000)).to.equal(1000);
  });
});

describe("processContains()", () => {
  it("works as specified", () => {
    const o = {}
    expect(processContains(o, [1, o, 3], b => b)).to.equal(true);
    expect(processContains({}, [{}], b => b)).to.equal(false);
    expect(processContains(2, [1, 2], b => b)).to.equal(true);
    expect(processContains(1, [2, 3], b => b)).to.equal(false);
  });
});

describe("processDuplicateFree()", () => {
  it("works as specified", () => {
    const arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 7]
    const arr2 = [1, 2, 3]
    const expected = [1, 2, 3, 4, 5, 6, 7]
    const cb = (list) => list
    expect(processDuplicateFree(arr2, cb)).to.eql(arr2);
    expect(processDuplicateFree(arr, cb)).to.eql(expected);
    expect(processDuplicateFree([], cb)).to.eql([]);
  });
});

describe("getFullNames()", () => {
  it("returns an array of strings", () => {
    expect(getFullNames(runners).every(r => typeof r === 'string')).to.equal(true);
  });
  it("returns an array of the same length as the original array", () => {
    expect(getFullNames(runners).length).to.equal(runners.length);
  });
  it("the strings in the array have the `<last-name>, <first-name>` format", () => {
    expect(getFullNames(runners)[0]).to.equal('Seiler, Charmain');
    expect(getFullNames(runners)[runners.length - 1]).to.equal('Baine, Shell');
  });
});

describe("firstNamesAllCaps()", () => {
  it("returns an array of strings", () => {
    expect(firstNamesAllCaps(runners).every(r => typeof r === 'string')).to.equal(true);
  });
  it("returns an array of the same length as the original array", () => {
    expect(firstNamesAllCaps(runners).length).to.equal(runners.length);
  });
  it("the strings in the array ARE ALL CAPS", () => {
    expect(firstNamesAllCaps(runners)[0]).to.equal('CHARMAIN');
    expect(firstNamesAllCaps(runners)[runners.length - 1]).to.equal('SHELL');
  });
});

describe("getRunnersByTShirtSize()", () => {
  it("returns an array of runners of a given shirt size", () => {
    expect(getRunnersByTShirtSize(runners, 'S').every(r => r.shirt_size === 'S')).to.equal(true);
  });
  it("returns an array of the correct length", () => {
    expect(getRunnersByTShirtSize(runners, 'S').length).to.equal(11);
    expect(getRunnersByTShirtSize(runners, '3XL').length).to.equal(7);
  });
});

describe("tallyUpDonations()", () => {
  it("returns 0 for an empty runners array", () => {
    expect(tallyUpDonations([])).to.equal(0);
  });
  it("returns the expected amount for a small dataset", () => {
    expect(tallyUpDonations([
      { donation: 1 },
      { donation: 2 },
      { donation: 3 },
    ])).to.equal(6);
  });
  it("returns the expected amount for the runners array", () => {
    expect(tallyUpDonations(runners)).to.equal(7043);
  });
});

// var person = { id: 1, name: "Luke", email: "luke@luke.com" };

// describe("makePersonObject()", () => {
//   it("makes an object of the right shape", () => {
//     expect(makePersonObject(1, "Luke", "luke@luke.com")).to.eql(person);
//   });
// });

// describe("getName()", () => {
//   it("makes an object of the right shape", () => {
//     expect(getName(person)).to.include("my name is Luke");
//   });
// });

// describe("makeSmartPerson()", () => {
//   it("makes an object with a name", () => {
//     expect(makeSmartPerson("Sam").name).to.eql("Sam");
//   });
//   it("makes an object with a functioning sum method", () => {
//     expect(makeSmartPerson("Sam").sum(1, 2)).to.eql(3);
//   });
//   it("makes an object with a functioning speak method", () => {
//     expect(makeSmartPerson("Sam").speak()).to.include("Sam");
//   });
// });

// describe("getCarInfoByIndex()", () => {
//   it("returns a string containing the car_make", () => {
//     expect(getCarInfoByIndex(inventory, 0)).to.include(inventory[0].car_make);
//   });
//   it("returns a string containing the car_model", () => {
//     expect(getCarInfoByIndex(inventory, 0)).to.include(inventory[0].car_model);
//   });
// });

// describe("getLastCarInfo()", () => {
//   it("returns a string containing the car_make", () => {
//     expect(getLastCarInfo(inventory)).to.include(
//       inventory[inventory.length - 1].car_make
//     );
//   });
//   it("returns a string containing the car_model", () => {
//     expect(getLastCarInfo(inventory)).to.include(
//       inventory[inventory.length - 1].car_model
//     );
//   });
// });

// describe("getCarInfoById()", () => {
//   it("returns a string containing the car_make", () => {
//     expect(getCarInfoById(inventory, 1)).to.include(inventory[0].car_make);
//   });
//   it("returns a string containing the car_model", () => {
//     expect(getCarInfoById(inventory, 1)).to.include(inventory[0].car_model);
//   });
// });

// describe("sortCarInventory()", () => {
//   it("can sort the inventory", () => {
//     const copyOfInventory = [...inventory];
//     const sorted = sortCarInventory(copyOfInventory);
//     expect(sorted[sorted.length - 1].car_model).to.eql("Yukon");
//   });
// });

// describe("getModelYears()", () => {
//   it("returns an array of car years", () => {
//     const carYears = inventory.map(c => c.car_year);
//     expect(getModelYears(inventory)).to.eql(carYears);
//   });
// });

// describe("getOlderCars()", () => {
//   it("returns an empty array for a very low max year", () => {
//     const cars = inventory.filter(c => c.car_year <= 0);
//     expect(getOlderCars(inventory, 0)).to.eql(cars);
//   });
//   it("returns the entire inventory for a very high max year", () => {
//     const cars = inventory.filter(c => c.car_year <= 3000);
//     expect(getOlderCars(inventory, 3000)).to.eql(cars);
//   });
//   it("returns some cars when the max year is somewhere in the middle", () => {
//     const cars = inventory.filter(c => c.car_year <= 1990);
//     expect(getOlderCars(inventory, 1990)).to.eql(cars);
//   });
// });

// describe("getGermanCars()", () => {
//   it("returns an array with the correct cars", () => {
//     const makes = ["Audi", "Mercedes-Benz", "Volkswagen", "BMW"];
//     const cars = inventory.filter(c => makes.includes(c.car_make));
//     expect(getGermanCars(inventory)).to.eql(cars);
//   });
// });

// describe("refactor into arrow functions", () => {
//   it("sum uses arrow syntax", () => {
//     expect(sumF.toString()).to.include("=>");
//   });
//   it("addFive uses arrow syntax", () => {
//     expect(addFiveF.toString()).to.include("=>");
//   });
//   it("argTimesTwo uses arrow syntax", () => {
//     expect(argTimesTwoF.toString()).to.include("=>");
//   });
// });

// describe("carMaker() STRETCH", () => {
//   it("makes a car with an odometer set to the correct value", () => {
//     expect(carMaker(123).odometer).to.eql(123);
//   });
//   it("driving the car increases the odometer", () => {
//     var car = carMaker(100);
//     car.drive(1);
//     expect(car.odometer).to.eql(101);
//     car.drive(1);
//     expect(car.odometer).to.eql(102);
//   });
//   it("driving the car returns the updated odometer", () => {
//     expect(carMaker(100).drive(5)).to.eql(105);
//   });
// });

////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
