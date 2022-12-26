#Expresiones regulares "RE"

import re #Importamos biblioteca.

texto = "Este coche verde es muy rápido."
print(texto)
patron = "verde" #Declaramos patron a buscar.
encontrado = re.search(patron, texto) #Declaramos busqueda.
if encontrado:
    print("El patron {} encontrado en el texto.".format (patron))
    ini = encontrado.start()
    fin = encontrado.end()
    print("El patron {} empieza en la posición {} y termina en {}".format (patron, ini, fin))
else:
    print("Patron {} no encontrado".format (patron))


texto2 = "Me gusta el color verde y por eso he comprado pintura verde."
patron2 = "verde"
buscarTodos = re.findall(patron2, texto2) #Busco el patron todas las veces que aparezca.
print(buscarTodos)
numeroDeVeces = len(buscarTodos)
print(numeroDeVeces)

patrones = ["gusta", "pintura", "coche", "moto"]
for patron in patrones:
    print("Estamos buscando por el patron {}". format (patron))
    buscarTodos = re.findall(patron, texto2)
    numeroDeVeces = len(buscarTodos)
    print(numeroDeVeces)