#Tuplas en Python. (No se pueden modificar los valores)

tupla = (1, 2, 4, "Hola", "Manuel", "Verde", 5)
print(tupla)

elemento = tupla[0]
print(elemento)

elemento2 = tupla[0:2]
print(elemento2)

tupla[0] = 9  #Error porque no se puede modificar una tupla