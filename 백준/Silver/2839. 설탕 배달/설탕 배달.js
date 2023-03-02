const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString();
let N = parseInt(input);

let count = 0;

while (N > 0) {
  if (N % 5 === 0) {
    N -= 5;
  } else {
    N -= 3;
  }
  count += 1;
}
N === 0 ? console.log(count) : console.log(-1);