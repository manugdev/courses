#Funciones decoradoras. Son aquellas que se aplican sobre otra funcion.

def asteriscos(funcion):
    def poner_asteriscos():
        print("#########################")
        funcion()
        print("#########################")
    return poner_asteriscos

@asteriscos #Esto es igual que poner "imprimir = asteriscos(imprimir)"
def imprimir():
    print("Hola, Buenos días")

imprimir()