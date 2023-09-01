const myfunction = (arr) => {
  let day = sortArr(arr);
  let ans = "";
  let start = day[0];
  let end = day[0];
  for (let i = 1; i < day.length; i++) {
    if (day[i] === end + 1) {
      end = day[i];
    } else {
      if (start == end) {
        ans += start + ",";
      } else {
        ans += start + "-" + end + ",";
      }
      start = day[i];
      end = day[i];
    }
  }
  if (start === end) {
    ans += start;
  } else {
    ans += start + "-" + end;
  }
  return ans;
};

const sortArr = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(myfunction([1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]));
