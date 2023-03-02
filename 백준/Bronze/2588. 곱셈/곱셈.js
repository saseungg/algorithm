const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let [num1, num2] = fs.readFileSync(file).toString().split("\n");
let [a, b, c] = num2.split("").map(Number)
console.log(+num1*c);
console.log(+num1*b);
console.log(+num1*a);
console.log(+num1*+num2);