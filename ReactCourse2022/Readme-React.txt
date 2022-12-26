							Curso react FreeCodeCamp 2022
Notas:

-Es una librería de JS Open Source.

-Componente: Comienzan simpre en mayuscula. Son parte de la interfaz de usuario que es independiente y reusable. Los hay de tipo FUNCIONALES y de tipo CLASE. 
Los componentes estan hechos de elementos.
	-Funcionales: Función de JS/ES6 que retorna un elemento de React(JSX). EJ.: function Saludo(props){return <h1>¡Hola, {props.nombre}!</h1>}
		*Caracteristicas: 1) Retorna un elemento JSX.
			           2) Comienza con mayuscula.
			           3) Puede recibir valores.

 	-Clase: Clase de ES6 que retorna un elemento. EJ.: class Saludo extends React.Component{ render() { return <h1>¡Hola, {this.props.nombre}!</h1>; } }
		*Caracteristicas: 1) Extiende de React.Component.
			          2) Debe tener un metono render() para retornar un elemento JSX.
			          3) Puede recibir valores.

-Props: Propiedades que puede recibir un componente de React. Solo puede ser enviados de PADRE a HIJO.

-Estado: Representación den JS  del conjunto de propiedades de un componente y sus valores actuales.

-Hooks: Funcion especial que te permite trabajar con estados en componentes funcionales y otros aspectos de React. 
              Sin escribir un componente de clase. Esto nos permite escribir un codigo mucho mas conciso y facil de entender.

-Event Listener: Funcion de JS que es ejecutada cuando ocurre un evento especifico.

-JSX (JavaScript XML): Permite describir en JS como se veran los componentes usando una estructura similar a HTML. Podemos crear y utilizar cualquier 
elemento HTML. EJ.: const elemento = <h1>¡Hola, Mundo!</h1>;

-Elemento: Unidad mas pequeña de React. Define lo que se ve en la pantalla. Se representan con etiquetas en letras minusculas. Se pueden agregar atributos.

-ReactDOM: paquete que facilita la interaccion y actializacion del DOM (Document Object Model) en aplicaciones React.

-Atributos: cambian algunos de HTML en React. EJ.: 
HTML	-	React
class		className
for		htmlFor

-Los elementos pueden ser anidados como en HTML.

**Debemos estructurar los elementos, luego renderizarlos.

-Tendremos de base un archivo HTML con un div con id="root", ahi dentro agregaremos todo lo que querramos con ReactDOM.render();
Para tener este ReactDOM primero debemos importarlo en nuestro programa con "import ReactDOM from "react-dom";"

-Self-closing tags: etiquetas que se cierran automaticamente, solo poseen etiquetas de apertura.

-En JSX podemos ingresar JS utilizando {}.

-Para crear una app en React, debemos correr el comando "npx create-react-app" + el nombre de la carpeta del proyecto o "." si quiero crearlo en la misma carpeta en el terminal.


