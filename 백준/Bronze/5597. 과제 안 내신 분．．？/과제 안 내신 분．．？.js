const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

let student = Array(30).fill().map((el, idx) => idx + 1);

let [a,b] = student.filter((el) => !input.includes(el));
console.log(a,b);