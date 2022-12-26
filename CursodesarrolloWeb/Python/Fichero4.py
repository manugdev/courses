#Listas
lista = [1,2,3]
print(lista)

lista = ["Antonio", "Luis", 2, 40, "Maria", 1, 4, 25]
print(lista)

elemento = lista[0]
print(elemento)

nuevosElementos = ["Rojo", "Verde", "Azul"] 
lista.append(nuevosElementos)         #Con esto agrego la lista entera.
print(lista)

#Si quiero agregar solo los elementos...
nuevosElementos2 = ["Casa", "Edificio", 100] 
lista.extend(nuevosElementos2)
print(lista)