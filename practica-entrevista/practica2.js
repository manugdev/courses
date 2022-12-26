function sumaMaxMin(array){
    let arrOrdenado = array.sort((a,b) => a-b)
    return arrOrdenado[0] + arrOrdenado[(arrOrdenado.length - 1)]
}

console.log(sumaMaxMin([3,1,1,2,10]));
console.log(sumaMaxMin([1,2,3,4,56,7,8,10]));
