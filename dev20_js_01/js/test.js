// ↓を記述する　できたかたはブラウザを更新（リロード）してください
// alert(1);

// 今これを記述しました！ブラウザでみてみましょう！
console.log("jsのお勉強中です");

// 変数のお話
var hako = "文字が入ります";

// console.log(hako); // 文字が入ります　がconsoleのタブで表示されます
// console.log(suuji); // 1  が表示されます

// if分のお話
var suuji = 1;

if (suuji === 1) {
  // suuji の中身が１だったら実行してね
  console.log("箱の中身は１ですよ");
} else if (suuji === 2) {
  console.log("箱の中身は２ですよ!");
}

var point = 79;
if (point >= 80) {
  console.log("素晴らしい!おめでとう!");
} else {
  console.log("もっと頑張りましょう!");
}

// [0,1,2]　3パターンが自動でリロードするたびに作られます
var random = Math.floor(Math.random() * 3);

// console.log(random, "randomな数字が入っている箱の中身");

// 合計3パターンの条件ができました
if (random === 0) {
  console.log("大吉です");
} else if (random === 1) {
  console.log("中吉です");
} else if (random === 2) {
  console.log("小吉です");
}
