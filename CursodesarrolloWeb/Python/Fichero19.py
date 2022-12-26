#Tratamiento de errores
try:
    fichero = open("datos.txt", "w")
    fichero.write("Esto son los datos para el fichero.")
    fichero.close()
except IOError: #Este except es especifico de IOError.
    print("Error de tipo IOError. El fichero no existe.")
except: #Este es un except genérico.
    print("Error general.")
else:
    print("Tratamiento del fichero correcto.")
finally:
    print("Tratamiento del fichero finalizado.")

print("Continua el programa.")
