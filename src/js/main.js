// let a = fetch(
//   "https://umayadia-apisample.azurewebsites.net/api/persons/Shakespeare"
// )
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((response) => {
//     const data = response.data;

//     console.log(response);
//     console.log("Name:", data.name);
//     console.log("Age:", data.age);
//     console.log("Note:", data.note);
//     console.log("Register Date:", data.registerDate);

//     document.getElementById("music").innerText = `
//       Name: ${data.name}
//       Age: ${data.age}
//       Note: ${data.note}
//       Register Date: ${data.registerDate}
//     `;
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// let youtuber = {
//   list: {
//     business: {
//       youtuber: [
//         {
//           name: "菅原",
//           age: 20,
//           job1() {},
//         },
//         {
//           neme: "俊哉",
//           age: 37,
//           job2() {},
//         },
//       ],
//     },
//   },
//   plan() {},
//   uploadVideo() {},
// };

// console.log(youtuber.list.business.youtuber[0].age);

// let elements = document.getElementsByClassName("title");
// let b = Array.from(elements).forEach((element) => {
//   element.innerText = "Domを操作";
// });

// function confirmed(fn) {
//   const input = window.prompt("実行しますか？");
//   fn(input);
// }

// confirmed(function (input) {
//   if (input === "実行") {
//     console.log("リポジトリを削除しました");
//   }
// });

// const btn = document.getElementById("button");

// btn.addEventListener("click", function () {
//   console.log("フォロー解除");
// });

// const foods = ["にんじん", "じゃがいも", "玉ねぎ"];

// foods.forEach(function (food) {
//   console.log(food);
// });

// async function callApi() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/");
//   const users = await res.json();
//   console.log(users);
// }

// callApi();

// then
// function callApiWithThen() {
//   const users = fetch("https://jsonplaceholder.typicode.com/users/")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (users) {
//       console.log(users);
//     });
// }

// callApiWithThen();

// function callApi() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users/");
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.onload = function () {
//     console.log(xhr.response);
//   };
// }

// callApi();

// const test = "test";

// alert(`菅原\n${test}`);

// let person = {
//   name: { first: "太郎", last: "独習" },
//   age: 18,
// };

// console.log(person.age);
// console.log(person.name.first);

// person.gender = "men";

// console.log(person);

// let person = {
//   name: { first: "太郎", last: "独習" },
//   age: 18,
// };

// console.log(person["age"]);
// console.log(person["name"]["first"]);

// person["gender"] = "women";

// console.log(person);

// const members = {
//   member1: "太郎",
//   member2: "二郎",
// };

// const keyBase = "member";

// console.log(members[keyBase + "1"]);

// es6からのブラケット記法
// const keyBase = "member";

// const members = {
//   [keyBase + "1"]: "太郎",
//   [keyBase + "2"]: "二郎",
// };

// console.log(members);

// delete members[keyBase + "1"];

// console.log(members.member1);
// 参照できなくなる

// 初期化時の宣言
// let person = {
//   hello() {
//     //省略記法
//     console.log("こんにちわ");
//   },
// };

// 既存オブジェクトにメソッドを追加
// person.sorry = function () {
//   console.log("ごめん");
// };

// person.sorry();

// メソッドの実行
// person.hello();

// シンボルの取得は、ブラケット記法のみ有効
// let mySymble1 = Symbol();
// let mySymble2 = Symbol();

// const obj = {
//   [mySymble1]: "値1",
//   [mySymble2]() {
//     console.log("hoge");
//   },
// };

// console.log(obj[mySymble1]);

// obj[mySymble2]();

// console.log(typeof "hello");
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof Symbol());
// console.log(typeof Symbol);
// console.log(typeof undefined);

// 明示的な型変換

// console.log(Number("1"));
// console.log(Number("HEllo"));
// console.log(Number("0"));
// console.log(Number(true));
// console.log(String(true));
// console.log(typeof String(1));

// 暗黙的な型変換

// console.log(1 + "1");

// 関係演算子
// console.log(10 < 2 * 6 - 2);

// 自己演算子
// let a = 0;
// a += 10;
// console.log(a);

// 論理積
// falsyな値がないため、左から右に判定が流れworldが返される
// console.log("hello" && "world");

// 論理和
// truthyな値が見つかった時点で、その論理和の結果を返し、演算子として処理が終了する
// console.log("hello" || "world");

// カンマ演算子
// それぞれの演算対象を左から右に評価し、最後のオペラントの値を返す
// let a = 0,
//   b = 1;

// console.log(a, b);

// 三項演算子
// if文の省略記法として使われる
// 1 === 1 ? console.log("真") : console.log("偽");
// 1 === 2 ? console.log("真") : console.log("偽");

// Null合体演算子

// let val = null;
// null,undedinedは右オペランドを返す
// val = val ?? "初期値";
// console.log(`val+ ${val}`);

// let num = 0;

// num = num ?? 10;
// null,undedined以外は左オペランドを返す
// conso

// オプショナルチェイニング演算子
// エラーで停止することがない
// const vtest = undefined?.prop;
// console.log(vtest);

// if文 (条件式がtruthyの場合に実行される)
// const fruit = "りんご";

// if (fruit === "りんご") {
//   console.log("りんごが見つかりました。");
// }

// if...else文 (else文は、falsyな場合にコードにコードを実行)
// const fruit = "リンゴ";

// if (fruit === "りんご") {
//   console.log("りんごが見つかりました。");
// } else {
//   console.log("りんごじゃないが見つかりました。");
// }

// falsyな値の中で、nullやundefinedを見分けるときに使うこともできる
// const truthy = "truthyな値です。";

// if (truthy) {
//   console.log("条件式に渡された値はtruthyです");
// } else {
//   console.log("条件式に渡された値はfalsyです。");
// }

// switch文
// const whileCase = "case3";

// switch (whileCase) {
//   case "case1":
//     console.log("case1節を実行しました");
//     break;

//   case "case2":
//     console.log("case2節を実行しました");
//     break;

//   default: {
//     console.log("default節を実行しました");
//   }
// }

// 例外処理
// 変数未定義のエラー
// console.log(jjljllj);

// webpackを使うとSyntaxError(記法間違え)ではなく違うエラーが起きる
// if (false) {
//   console.log("このコードは実行されません");
//   elseif {
//     console.log("こちらが実行されます。");
//   }
// }

// TypeError:メソッド実行時に期待された型ではなかった場合
// const num = 1;
// num.toUpperCase();

// 例外処理
// try {
//   nonExistingFunction();
//   console.log("nonExistingFunctionでの例外により、これは実行させません。");
// } catch (error) {
//   console.error("nonExistingFunctionは存在しないため、例外が発生しました");
//   console.error("エラータイプ:" + error.name);
//   console.error("エラーメッセージ:" + error.message);
// } finally {
//   console.log("後処理の記述が必要な場合はここに記述します。");
// }

// console.log("例外が発生しても後続のコードが実行されます。");

// 明示的な例外スロー

// try {
//   const num = "3";

//   if (typeof num !== "number") {
//     throw "numは数値型でなければなりません。";
//   }

//   console.log(`${num}x5 = ${num * 5}`);
// } catch (error) {
//   console.error(error);
// }

// while文

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// while (0) {
//   console.log("このコードは一度も実行されません。");
// }

// for文

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (;;) {
//   const rand = Math.random();
//   console.log(rand);
//   if (rand > 0.5)
//     //0.5より大きい場合のfor文を抜ける
//     break;
// }

// 配列

// let fruitArray = ["りんご", "メロン", "みかん"];

// console.log(fruitArray[0]);
// console.log(fruitArray.length);

// const numArray = [10, 20, 30];

// for (let index = 0; index < numArray.length; index++) {
//   //配列の値をコンソールに出力
//   numArray[index] = numArray[index] + 10;
// }

// console.log(numArray);

// for...in文
// const fruits = {
//   apple: "りんご",
//   banana: "バナナ",
//   orange: "オレンジ",
// };

// for (const key in fruits) {
//   console.log(`キー:[${key}] 値:[${fruits[key]}]`);
// }

import '@splidejs/splide/css/skyblue';

import Splide from '@splidejs/splide';

new Splide( '.splide' ).mount();

const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const users = await res.json();
  return users;
}

function addList(user) {
  if (user.id <= 5) {
    const list = document.createElement('li');
    list.innerText = user.name;
    lists.appendChild(list);
    console.log(list);
  }
}

async function listUsers() {
  // Dom操作を待たせる
  const users = await getUsers();

  users.forEach(addList);
}

window.addEventListener('load', listUsers);

button.addEventListener('click', listUsers);
