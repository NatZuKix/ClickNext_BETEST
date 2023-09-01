const myfunction = (str1, str2) => {
  arrstr1 = str1.toLowerCase().split("");
  arrstr2 = str2.toLowerCase().split("");
  if (arrstr1.length == arrstr2.length) {
    let strcheck1=sortstringinArr(arrstr1)
    let strcheck2=sortstringinArr(arrstr2)
    for(let i=0;i<strcheck1.length-1;i++){
      if(strcheck1[i]!=strcheck2[i]){
        return false
      }
    }
    return true
  } else {
    return false;
  }
};

const sortstringinArr=(arr)=>{
  const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
}
return arr
}


console.log(myfunction("Marym", "Asrmyy"));
console.log(myfunction("Mars", "rsam"));
