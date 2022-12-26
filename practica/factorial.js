//5! = 5 x 4 x 3 x 2 x 1

let numFactorizado = 1;

function factorizar(num){
  for(let i = 1; i <= num; i++){
    numFactorizado = numFactorizado * i;
  }
  return numFactorizado;
}

console.log(factorizar(10));


function factorial(num){
  if(num === 0 || num === 1){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(10));