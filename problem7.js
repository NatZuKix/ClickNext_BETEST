const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const myfunction = (sec) => {
    let time=''
  const hours = Math.floor(sec / 3600);
  const remainSec = sec % 3600;
  const minutes = Math.floor(remainSec / 60);
  const seconds = remainSec % 60;
  time=`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  return time
  };

  rl.question('INPUT : ', number => {
    const num = parseInt(number);
    rl.close();
    console.log(myfunction(num))
  })