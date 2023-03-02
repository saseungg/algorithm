const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\n");
input.shift();
let [grade] = input.map((el) => el.split(" ").map(Number));

let max = Math.max(...grade);

let average = grade.map((el) => (el / max) * 100).reduce((acc, cur) => acc + cur) / grade.length;

console.log(average);