const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ");
let result;
result = input.map(Number).reduce((acc, cur) => acc - cur);
console.log(result);