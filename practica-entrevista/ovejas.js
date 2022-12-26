const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  function contarOvejas(arr) {
    // aquí tu magia

    const ovejaIndicada = arr.filter(oveja => {
    if((oveja.name.includes('a') || oveja.name.includes('A')) && (oveja.name.includes('n') || oveja.name.includes('N')) && oveja.color === 'rojo'){
        return oveja
    }      
  })
    
    return ovejaIndicada
  }
console.log(contarOvejas(ovejas));
//Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
//Haz una función que devuelva una lista con todas las ovejas que sean de color 
//rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

