const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin': './input.txt';
const input = fs.readFileSync(file).toString().split('\n')

const len = input.shift();

input.sort((a, b) => parseFloat(a) - parseFloat(b));

console.log(input.join("\n"));