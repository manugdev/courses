// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌

function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    const reg = /\([^()]*\)/
    let cartaSeparada = letter.split(' ').filter(letter => letter.includes('(' && ')')).toString();
    if(cartaSeparada.includes('[') || cartaSeparada.includes('{') || cartaSeparada.lenght === '()') return false
    else return true
 
}
console.log(isValid("() bici"));