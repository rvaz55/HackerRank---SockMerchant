//color of socks is represented by numbers
let numSocks = 7;
let socks = [1, 2, 3, 1, 3,4,4,5,6,7];
let numOfPairs = 0

//Create a new setObj that holds only the unique values in 'socks[arr]'
//in setObjs a value may only occur once
let distinctNums = [...new Set(socks)];

//Convert the setObj into an array that holds 
//{key:val, key:val} pairs called {num, ocrs}
//where {num : 'a unique value in setObj'} and {ocrs : 'counter that begins at zero and will be incremented everytime `num.num` is equal to `sock`'}
let counter = distinctNums.map(function( num, ocrs){
  return {num:num, ocrs: 0 }
})

//For every `sock` in the socks[arr] and determine if 
// `sock` is .forEach()`
 socks.forEach((sock, idx)=> counter.forEach((num, idxC) => {
  
    if(sock == num.num){
      num.ocrs++   
    }  
    if(idx == socks.length-1){

          if(num.ocrs % 2  === 0){
            numOfPairs++
          }
          if(idxC == counter.length-1){
            console.log(numOfPairs)
          }
          
    }
  }));

console.log(numOfPairs)
