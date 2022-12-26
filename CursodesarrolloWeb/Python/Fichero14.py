#Funciones

def hola():  
    print("Hola, Buenos Días")

hola()

#"def" para decir que lo siguiente es una funcion, luego nombre y"()".

def sumar(numero1,numero2):
    """Esta funcion suma dos numeros enteros""" #Comentarios en funciones
    if type(numero1) == type(numero2) == type(10):
        resultado = numero1 + numero2
    else:
        resultado = "Error en el tipo de dato."
    return resultado

suma = sumar(5,3)
print(suma)
suma = sumar("x",3)
print(suma)

