
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const myfunction = (num) => {
    for(let i=1;i<=num;i++){
     let result =''
     let count=i*2-1
     for(let j=i;j<num;j++){
        result+=' '
     }
     for(let k=0;k<count;k++){
        result+="*"
     }
     console.log(result);
    }
}
   
   
rl.question('INPUT : ', number => {
   const num = parseInt(number);
   rl.close();
   myfunction(num)
 })