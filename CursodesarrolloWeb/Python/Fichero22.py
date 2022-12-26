#Variables locales y globales
#locals()
#globals()

numero = 30
texto = "Hola"

def funcion1():
    numero2 = 50
    saludo = "Hola, Buenos dias"
    print(numero2)
    print(saludo)
    print(locals()) #Locals solo dentro de las funciones

funcion1()
print(numero)
print(texto)
print(globals())
print(globals()["__file__"])