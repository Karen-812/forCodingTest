// readlineモジュールをインポート
const readline = require("readline");

// readlineインターフェイスを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 標準入力から1行読み取る
// 計算回数はlog_2(n)程度にとどまるよ~らしい
rl.on("line", (input) => {
  let squareBox = [];
  for (i=1; i<499; i++){
    let square = i*i;
    squareBox.push(square);
  }
  const inputNumber = Number(input);
  let ifExist = squareBox.includes(inputNumber);
  let outputContent = squareBox.indexOf(inputNumber);

  if (ifExist) {
    console.log(outputContent+1)
  } else{
    console.log(-1);
  } 
  // // 出力文字列をコンソールに表示
  // console.log(output);
  // 標準入力を終了
  rl.close();
}).setMaxListeners(1);