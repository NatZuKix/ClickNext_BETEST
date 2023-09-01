const myfunction = (word) => {
    let myword = word.split(" ")
    let ans=[]
    for(let word of myword){
      let reversed = '';
      for (let i = word.length - 1; i >= 0; i--) {
       reversed += word[i];
    }
    ans.push(reversed)
    }
    ansstr=''
   for(const word of ans){
     ansstr+=word+" "
   }
   return ansstr
  };
  
console.log(myfunction("Welcome to clicknext"));  