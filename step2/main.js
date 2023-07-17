// readlineモジュールをインポート
const readline = require("readline");

// readlineインターフェイスを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 標準入力から1行読み取る
rl.on("line", (input) => {
  const inputNumber = Number(input);
  let outputContent = ' ';
  if (inputNumber % 15 == 0) {
    outputContent = 'FizzBuzz';
  } else if (inputNumber % 5 == 0) {
    outputContent = 'Buzz';
  } else if (inputNumber % 3 == 0) {
    outputContent = 'Fizz';
  } else {
    outputContent = input;
  }
  const output = outputContent;
  // 出力文字列をコンソールに表示
  console.log(output);
  // 標準入力を終了
  rl.close();
}).setMaxListeners(1);
