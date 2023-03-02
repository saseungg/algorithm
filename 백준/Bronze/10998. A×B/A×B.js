const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ");

console.log(parseInt(input[0])*parseInt(input[1]))