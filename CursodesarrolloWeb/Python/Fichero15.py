#Funciones Lambda (Funciones anonimas)

lista = [1,2,3,4,5,6]

#Esto con una funcion par
def par(numero):
    resultado = (numero % 2) == 0
    return resultado

filtro = filter(par,lista)
pares = list(filtro)
print(pares)
#O asi:
print(list(filter(par,lista)))

#Esto con funcion Lambda
filtro = filter(lambda numero: (numero%2) == 0,lista)
pares = list(filtro)
print(pares)
#Aca lambda sustituiria a la funcion par. Nos ahorrariamos crear
#una funcion, si es que no la vamos a utilizar mas veces.
