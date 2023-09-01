const myfunction = (arr, sum) => {
  let ans = [];
  for (let num of arr) {
    let pair = sum - num;
    if (arr.find((x) => x == pair) != undefined) {
      arr.splice(arr.indexOf(pair), 1);
      arr.splice(arr.indexOf(num), 1);
      if (num < pair) {
        ans.push([num, pair]);
      } else {
        ans.push([pair, num]);
      }
    }
  }
  return ans;
};
const answer = (arr, sum) => {
  let ans = myfunction(arr, sum);
  ans.forEach((x) => console.log(x[0] + "," + x[1]));
};

answer([1, 2, 3, 4, 5], 5);
