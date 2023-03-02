//todo readline(배열로 쪼개기)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let value = finalResult(convertArray(line), dupCheckToObject(convertArray(line)));
  console.log(value);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});

// 배열로 변환하고 숫자로 바꿈 @ 기댓값 : [3,3,6]
const convertArray = (inputValue) => {
  const array = inputValue.split(" ").map((el) => +el);
  return array;
};

//중복값 확인해서 객체로 바꿈 @ 기댓값 : { '3': 2, '6': 1 }
const dupCheckToObject = (inputValue) => {
  const object = {};
  inputValue.forEach((x) => {
    object[x] = (object[x] || 0) + 1;
  });
  return object;
};

//todo 몇개 같은지 확인
const finalResult = (inputArray, inputObject) => {
  switch (Object.keys(inputObject).length) {
    case 1:
      return inputArray[0] * 1000 + 10000;
    case 2:
      return +Object.entries(inputObject).find((_n) => _n[1] === 2)[0] * 100 + 1000;
    default:
      return Math.max(...inputArray) * 100;
  }
};
