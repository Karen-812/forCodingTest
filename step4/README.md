# ph5-JobHuntingForEngineers-step4

## 課題名 ex_fibonacci

## 注意

- 自分で考える力をつけるため、回答の作成に chatGPT や GitHubCopilot などの AI を使用しないようお願いします。
- 同様の理由から、「フィボナッチ数列を出力する方法」など問題を直接検索することも禁止とします。
- 解説は PHP の場合は answer-php ブランチに、JavaScript の場合は answer-JavaScript ブランチにあります。解けても解けなくても確認し、コードの意味を理解できるようにしましょう。
- また、今回は PHP と JavaScript で実装の仕方を変えているので、どちらの解説のコードも読むようにしましょう。PHP 版の方が簡単なので、JavaScript 版の理解が難しければそちらの解き方さえ理解していれば大丈夫です。

## 問題文

標準入力から正の整数 N が与えられます。フィボナッチ数列の N 番目の値を求めてください。

フィボナッチ数列とは、最初の 2 つの数字から始めて、その後の数字が直前の 2 つの数字を足した数になるような数列のことです。わかりやすく説明すると、フィボナッチ数列はこんな感じです：

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

このように、次の数字は前の 2 つの数字を足して作られます。0+1=1、1+1=2、1+2=3、2+3=5 と続いていくように、前の 2 つの数字を足して次の数字を作っていく数列がフィボナッチ数列と呼ばれます。

## 制約

- 1 <= N <= 50

## 入力

- 入力は 1 行で、整数 N が与えられます。

## 出力

- フィボナッチ数列の N 番目の値を 1 行で出力してください。

## 終了条件

- 以下の例で期待した出力が出れば終了です。

## 実行コマンド

## PHP の場合

`php main.php`

## JavaScript の場合

`node main.js`

## 入出力例１

### 入力

`1`

### 出力

`0`

## 入出力例２

### 入力

`2`

### 出力

`1`

## 入出力例

### 入力

`7`

### 出力

`8`

## 入出力例

### 入力

`50`

### 出力

`7778742049`