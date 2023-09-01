const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const myfunction=(arr)=>{
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  ans=''
  for(let num=0 ; num< arr.length;num++){
    if(num!=arr.length-1){
      ans+=arr[num]+","
    }else{
      ans+=arr[num]
    }
    
  }
  return ans
  }

  rl.question('INPUT : ', str => {
    const input= str
    rl.close();
    let data=input.split(",")
    let number=data.filter((x)=>x!=",")
    if(number.length==10){
      let set=[]
      number.forEach((x)=> set.push(parseInt(x)))
      console.log(myfunction(set));
    }else{
      console.log("input need 10 number only");
    }
  })