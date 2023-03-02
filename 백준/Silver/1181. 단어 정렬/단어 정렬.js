const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n")

input.shift()

let arr = [...new Set(input)]

arr = arr.sort((a,b)=>a.length-b.length || a.localeCompare(b))

console.log(...arr);