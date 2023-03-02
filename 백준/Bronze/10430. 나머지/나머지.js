const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ").map(Number);
let [A,B,C] = input
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C)
console.log(((A%C) * (B%C))%C)