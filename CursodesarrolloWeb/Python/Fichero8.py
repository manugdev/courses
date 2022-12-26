#Conjuntos en Python. No se pueden repetir elementos.

conjunto = set()
print(conjunto)

conjunto.add(1)
conjunto.add(2)
conjunto.add(3)
conjunto.add("Hola")
conjunto.add("Manuel")
print(conjunto)

conjunto.discard("Hola")
conjunto.discard(1)
print(conjunto)

lista = [1, 2, 2, 2, 3, 3, 3, 1, 1, 1] #Si quiero eliminar repetidos...
conjunto = set(lista)
print(conjunto)

