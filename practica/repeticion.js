let numeros = [2,4,5,4,7,9,5];

function encontrarDuplicidad(arr){
  let obj = {};
  let numerosRepetidos = [];

  for(let i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1;
    } else {
      numerosRepetidos.push(arr[i])
    }
  }
  return numerosRepetidos;
}

console.log(encontrarDuplicidad(numeros));
