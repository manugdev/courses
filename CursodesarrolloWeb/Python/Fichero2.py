texto = "Hola, Buenos Días"
print(texto)

primerCaracter = texto[0]
print(primerCaracter)

ultimoCaracter = texto[-1]
print(ultimoCaracter)

algunosCaracteres = texto[0:4]  #Es 4 porque le quita un espacio.
print(algunosCaracteres)

algunosCaracteres2 = texto[6:] #Si no digo hasta donde, llega hasta el final.
print(algunosCaracteres2)

deDosEnDos = texto[0::2] #Si pongo doble ":" saltea caracteres.
print(deDosEnDos)

mayusculas = texto.upper()
print(mayusculas)

minusculas = mayusculas.lower()
print(minusculas)

colores = "Rojo,Verde,Azul,Negro"
lista = colores.split(",")  #Usa la coma como division y las quita.
print(lista)
color = lista[0]
print(color)