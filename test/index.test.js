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

  var {
    processFirstItem,
    processLength,
    processLastItem,
    processSum,
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
