const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let [A, B] = fs.readFileSync(file).toString().split(" ").map(Number);

console.log(A > B ? ">" : A < B ? "<" : "==");