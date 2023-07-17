# ph5-JobHuntingForEngineers-step3

## 課題名　 ex_sqrt

## 注意

- 自分で考える力をつけるため、回答の作成に chatGPT や GitHubCopilot などの AI を使用しないようお願いします。
- 同様の理由から、「平方根を出力する方法」など問題を直接検索することも禁止とします。
- 解説は PHP の場合は answer-php ブランチに、JavaScript の場合は answer-JavaScript ブランチにあります。解けても解けなくても確認し、コードの意味を理解できるようにしましょう。
- 平方根を直接求める関数（例：sqrt 関数）は使用禁止です。

## 問題文

標準入力から受け取った整数 N の平方根を求めるプログラムを作成してください。ただし、平方根を直接求める関数（例：sqrt 関数）は使用禁止です。求めた平方根が整数でない場合は、-1 を出力してください。

## 制約

- 1 <= N <= 9223372036854775807
- N は整数

## 入力

- 入力は 1 行からなり、1 つの整数 N が与えられます。

## 出力ルール

- 求めた平方根が整数であれば、その整数を出力してください。整数でない場合は、-1 を出力してください。

## 終了条件

- 下の例全てで求めた平方根が出力されたら終了となります。

## 実行コマンド

### PHP の場合

`php main.php`

### JavaScript の場合

`node main.js`

## 入出力例１

### 入力

`25`

### 出力

`5`

## 入出力例２

### 入力

`2`

### 出力

`-1`

## 入出力例３

### 入力

`2147302921`

### 出力

`46339`

## 入出力例４

### 入力

`2147483647`

### 出力

`-1`

## 入出力例５

### 入力

`9223372024852248004`

### 出力

`3037000498`

## 入出力例６

### 入力

`9223372036854775807`

### 出力

`-1`