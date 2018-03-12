// zadanie 1

let a = "Hello";
let b = "World";

let c = `${a} ${b}`;

// zadanie 2

let multiply = (x, y=1) => x*y;


console.log(multiply(2, 5)) // 10
console.log(multiply(6, 6)) // 36
console.log(multiply(6)) // 6

// zadanie 3

const average = (...args) => args.reduce((calosc,item) => calosc + item, 0)/args.length;

console.log(average(1)) // 1
console.log(average(1, 3)) // 2
console.log(average(1, 3, 6, 6)) // 4

// zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// zadanie 5

const dziwneDane = [1, 4, 'Iwona', false, 'Nowak'];

const [, ,firstname, ,lastname] = dziwneDane;

console.log(`${firstname} ${lastname}`);