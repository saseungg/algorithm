const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin': './input.txt';
let input = fs.readFileSync(file).toString().split('\n')
let str = input[1].split("").map(Number)
let sum = 0;

str.forEach((x)=>sum += x)
console.log(sum);

