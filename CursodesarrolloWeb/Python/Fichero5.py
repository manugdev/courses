lista = [1, 2, "Verde", 5, "Antonio"]
print(lista)

lista.pop()  #Elimina el ultimo elemento.
print(lista)

lista.pop(0) #Puedo elegir cual eliminar.
print(lista)

lista.reverse()
print(lista)

lista2 = [5, 9, 2, 3, 1]
lista2.sort()
print(lista2)

lista3 = [1, 2, 3, 4, ["Verde", "Rojo"]]
elemento = lista3[4][0]
print(elemento)

matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
listaNueva = [elemento[0] for elemento in matriz] 
print(listaNueva) #Imprime el primer elemento de cada matriz.