const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let [year] = fs.readFileSync(file).toString().split(" ").map(Number);

if (year % 4 === 0) {
  if (year % 100 !== 0 || year % 400 === 0) {
    console.log(1);
  } else console.log(0)
} else console.log(0);