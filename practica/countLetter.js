let text = "iausioAAduhsdjqaaaddsdsSJAK88192aasa";
let textLower = text.toLowerCase();
let arrayText = Array.from(textLower);
let letter = "a";
let count = 0;

console.log(arrayText.filter(char => char === letter).length)

arrayText.forEach(element => {
  if(element === letter){
    count += 1;
  } 
});

console.log(count)