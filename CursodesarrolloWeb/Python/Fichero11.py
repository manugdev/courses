#Bucle FOR

lista = [1,2,3,4]
for elemento in lista:
    print(elemento)

diccionario = {"clave1": "valor1", "clave2": "valor2"}
for clave in diccionario:
    print("{}: {}".format(clave, diccionario[clave]))

tupla = [(1,2), (3,4)]
for elemento in tupla:
    print(elemento)
    
    #Si quiero recorrerlo
for elemento1,elemento2 in tupla:
    print(elemento1)
    print(elemento2)
