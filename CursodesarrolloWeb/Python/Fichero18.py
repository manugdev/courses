from typing import Text


class Persona():
    texto = ""
    def __init__(self, nombre):
        self.nombre = nombre
    def saludar(self):
        self.texto = "Hola, mí nombre es " + self.nombre
        return self.texto

persona1 = Persona("Manuel")
print(type(persona1)) #Veo que clase de dato es
print(persona1.nombre) #Veo el valor del atributo
texto = persona1.saludar() #Asigno la persona para el texto
print(texto)

class Adulto(Persona): #Hacemos que esta clase herede atributos de Persona
    def __init__(self, nombre):
        Persona.__init__(self, nombre)
        #Vamos a sobreescribir una funcion
    def saludar(self):
        self.texto = "Hola, soy adulto."
        return self.texto
    def grabar_tarjeta(self, tarjeta):
        self.tarjeta = tarjeta
    def __str__(self):
        self.texto = "Adulto : nombre = " + self.nombre
        return self.texto

adulto1 = Adulto("Lucia")
print(type(adulto1))
texto = adulto1.saludar()
print(texto)
adulto1.grabar_tarjeta("3333222211115555")
print(adulto1.tarjeta)
 
numero = 5
print(numero)
print(adulto1) #Esto busca en la clase el str, si no hay muestra cod.


