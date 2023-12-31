/* AtoZ
65	0x41	A
66	0x42	B
67	0x43	C
68	0x44	D
69	0x45	E
70	0x46	F
71	0x47	G
72	0x48	H
73	0x49	I
74	0x4a	J
75	0x4b	K
76	0x4c	L
77	0x4d	M
78	0x4e	N
79	0x4f	O
80	0x50	P
81	0x51	Q
82	0x52	R
83	0x53	S
84	0x54	T
85	0x55	U
86	0x56	V
87	0x57	W
88	0x58	X
89	0x59	Y
90	0x5a	Z
*/

// readlineモジュールをインポート
const readline = require("readline");

// readlineインターフェイスを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 標準入力から1行読み取る
rl.on("line", (input) => {
  // 標準入力を終了
  Main(input);
  rl.close();
}).setMaxListeners(1);

function Main(input) {
  // let inputString = parseInt(input, 10);←これが邪魔してた
  let output = ' ';
  let inputNumber = input.codePointAt(0);
  for(i=inputNumber; i<91; i++){
  output += String.fromCodePoint(i);
  }
  // 出力文字列をコンソールに表示
  console.log(output);
}
