#Formas de importar funciones con modulos:

#1
import Modulo
Modulo.funcion1()
Modulo.funcion2()

#2
import Modulo as mod
mod.funcion2()
mod.funcion1()

#3
from Modulo import funcion1
funcion1()
funcion2() #Aca no funcionaria porque no la importe.

#4
from Modulo import * #Importa todo lo que hay en el modulo
funcion1()
funcion2()