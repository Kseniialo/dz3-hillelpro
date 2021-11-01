// function userNumber(userN){
//      let i=0
      
//     do {
//             userN = prompt('Enter number:')
//             userN = parseFloat(userN);
//             i++
//            } while (isNaN(userN) && i<9);
//             console.log(userN);
//     }
      
      
//     userNumber()

// function mathSymbol (symbol){
//     let i = 0
//     do{
//       symbol = prompt('Enter math symbol:', '/  *  -  +');
//       i++
//     }while((symbol !== '/' || symbol !== '*' || symbol !== '-' || symbol !== '+') && i<9)
    
//           console.log(symbol);
//       }
      
//       mathSymbol()


function userNumber(userN, i){
    i=0;
   do{
     userN = prompt ('Enter number:')
     userN = parseFloat (userN);
     i++;
     }while (isNaN(userN) && i<5);
      return userN;
  }


function mathSymbol (symbol){
  symbol = prompt('Enter math symbol:', '/  *  -  +');
 
  if ( symbol === '/' ||symbol === '*' ||symbol === '-' ||symbol === '+'){
      return symbol;
  }else{
      return mathSymbol();
 
  }
  }


function calculate (userNum1, userNum2, symbol){
  switch (symbol){
  case '+': 
    return userNum1 + userNum2;
  case '*': 
    return userNum1 * userNum2;
  case '-': 
    return userNum1 - userNum2;
  case '/': 
    return userNum1 / userNum2;
} 
}

function main (userN1, userN2, mathS, result){
userN1 = userNumber();
userN2 = userNumber();
mathS = mathSymbol();

result = calculate(userN1, userN2, mathS);

alert('Your result: ' + userN1 + mathS + userN2 + ' = ' + result);
}
main()