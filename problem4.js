const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const myfunction = (num) => {
    for(let i=num;i>=0;i--){
     let result =''
     let count=i*2-1
     for(let x=0;x<num-i;x++){
        result+=" "
     }
     for(let j=0 ;j<count;j++){
       result+="*"
     }
     console.log(result);
    }
   };
   
   

   rl.question('INPUT : ', number => {
    const num = parseInt(number);
    rl.close();
    myfunction(num)
  })
   