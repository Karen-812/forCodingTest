// readlineモジュールをインポート
const readline = require("readline");

// readlineインターフェイスを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 標準入力から1行読み取る
rl.on("line", (input) => {
  let outputArray = [0, 1];
  if (input == 1) {
    output = 0
  } else if (input == 2) {
    output = 1
  } else {
    for (i = 2; i < input; i++) {
      outputArray.push(outputArray[i-2] + outputArray[i-1]);
      output = outputArray[i];
    }
  }

  // // 出力文字列をコンソールに表示
  console.log(output);
  // 標準入力を終了
  rl.close();
}).setMaxListeners(1);