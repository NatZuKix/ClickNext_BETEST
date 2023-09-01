const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const myfunction = (rows) => {
    let num = 1;
  for (let i = 1; i <= rows; i++) {
    let row = '';
    for(let k=0 ;k<rows-i;k++){
        row+=' '
    }
    for (let j = 1; j <= i; j++) {
      row += num % 10 + ' ';
      num++;
    }
    console.log(row);
  }
  };
  
  rl.question('INPUT : ', number => {
    const num = parseInt(number);
    rl.close();
    if(num>=1 && num<=4){
      myfunction(num)
    }else{
      console.log("input is only 1-4");
    }

  })