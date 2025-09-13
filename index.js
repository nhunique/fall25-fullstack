// Exercise 1: Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of
// const greeter = (myArray, counter) => {
//     for (let name of myArray){
//         console.log(`Hello ${name}`);

//     }
// }

// greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)


// //Exercise 2: Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string.

// const capitalize = (string) => {
  
//   const [first, ...rest] = string;
//     return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
// };

// console.log(capitalize("fooBar")); 
// console.log(capitalize("nodeJs"));   

//Exercise 3: Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array..

// const colors = ['red', 'green', 'blue']
// const capitalizeColors = (colors) => {
//     console.log(colors.map(capitalize))
// }

// capitalizeColors(colors)

// //Ex 4: 
//  var values = [1, 60, 34, 30, 20, 5]

//  const filterLessThan20 = (values) => {
//     return values.filter( a => a < 20)
//  }
//  console.log(filterLessThan20(values))

//Ex5:

// var array = [1,2,3,4]

// const calculateSum = (array) => {
//     return array.reduce( (acc, curr) => acc + curr, 0 )
// }

// const calculateProduct= (array) => {
//     return array.reduce( (acc, curr) => acc * curr, 1 )
// }

// console.log(calculateSum(array))
// console.log(calculateProduct(array))

// Ex 6: Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class. The parameters for the Car class is the model and year. The parameters for the subclass is the model, year and balance.
// Use the super key word in the Sedan subclass to set the model and name in base Car constructor.

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  details() {
    return `Model: ${this.model}, Year: ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  details() {
    return `${super.details()}, Balance: $${this.balance}`;
  }
  info() {
    return `${this.model} has a balance of ${this.balance}`
  }
}

const car2 = new Car("Pontiac Firebird", 1976);
const sedan = new Sedan("Toyota Camry", 2022, 25000);
console.log(car2.details())
console.log(sedan.info());

