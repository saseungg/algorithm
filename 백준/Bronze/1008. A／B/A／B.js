const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a / b);