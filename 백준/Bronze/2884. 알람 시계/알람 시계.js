const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ").map(Number);

let hour = input[0];
let minute = input[1] - 45;

if (minute < 0) {
  hour -= 1;
  minute += 60;
  if (hour < 0) {
    hour += 24;
  }
}

console.log(hour, minute);