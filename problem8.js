const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const myfunction = (price) => {
  let change = 1000 - price;
  const money_500 = Math.floor(change / 500);
  const remain1 = change % 500;
  const money_100 = Math.floor(remain1 / 100);
  const remain2 = remain1 % 100;
  const money_50 = Math.floor(remain2 / 50);
  const remain3 = remain2 % 50;
  const money_20 = Math.floor(remain3 / 20);
  const remain4 = remain3 % 20;
  const coin_10 = Math.floor(remain4 / 10);
  const remain5 = remain4 % 10;
  const coin_5 = Math.floor(remain5 / 5);
  const coin_1 = remain5 % 5;

  console.log(`จำนวนเงินทอน  ${change} บาท`);
  if (money_500 >= 1) {
    console.log(`500  ${money_500} ใบ`);
  }
  if (money_100 >= 1) {
    console.log(`100  ${money_100} ใบ`);
  }
  if (money_50 >= 1) {
    console.log(`50  ${money_50} ใบ`);
  }
  if (money_20 >= 1) {
    console.log(`20  ${money_20} ใบ`);
  }
  if (coin_10 >= 1) {
    console.log(`10  ${coin_10} เหรียญ`);
  }
  if (coin_5 >= 1) {
    console.log(`5  ${coin_5} เหรียญ`);
  }
  if (coin_1 >= 1) {
    console.log(`1  ${coin_1} เหรียญ`);
  }
};

rl.question("INPUT : ", (number) => {
  const num = parseInt(number);
  rl.close();
  if(num<=1000){ myfunction(num);}
  else{
    console.log("lower 1000");
  }
});
