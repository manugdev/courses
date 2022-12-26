function fibonacci(num) {
  var serie = [0, 1];
  for (let i = 2; i <= num; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }
  return serie;
}
console.log(fibonacci(30));
