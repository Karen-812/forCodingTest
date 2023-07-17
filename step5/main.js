// readlineモジュールをインポート
const readline = require("readline");

// 標準入力と標準出力を扱うインターフェイスを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 入力を格納する配列
let input = [];
let output = [];
let outputArray = [];

// 'line'イベントをリッスンして、入力を受け取る

rl.on("line", (line) => {
  input.push(line);
});

// TODO: 入力が終わったら、結果を出力
rl.on("close", () => {
  input_length = Number(input[0]);
  let numbers = input[1].split(' ');

  for(i=0; i<input_length; i++){
    new_number = Number(numbers[i]);
    outputArray.push(new_number);
  }

  for(i=0; i<input_length; i++){
    outputArray[i]
  }

  console.log(outputArray);
});




/* ---
// 入力が終わったら、ソートアルゴリズムを実行し、結果を出力
rl.on("close", () => {
  console.log(sortedArray(input));
});

// 入力されたデータを処理し、整数のリストを昇順にソートする関数
function sortedArray(input) {
  // 配列の長さを取得
  const N = parseInt(input[0], 10);

  // スペース区切りの文字列を整数の配列に変換
  const array = input[1].split(" ").map((num) => parseInt(num, 10));

  // バブルソートアルゴリズムを実装
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      // 隣り合う要素を比較し、順序が逆なら入れ替える
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  // ソートされた配列をスペース区切りの文字列に変換して返す
  return array.join(" ");
}

*/
