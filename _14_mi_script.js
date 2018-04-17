/*
Nuevos métodos para identificar elementos
querySelector()
Retorna el primer elemento que cumple con las caracteristicas de los parametros

querySelectorAll()
Retorna todos los elementos que cumplen con las caracteristicas de los parametros,
se regresa un array con los elementos en el mismo orden con el que se encuentran
en el documento (página)

entre los parentesis van los selectores css3 que queramos
*/

function Ejecuta(){
	//Devuelve el primer elemento de la pagina web que coincide con el selector(parametro)
	//document.querySelector(".import").onclick = Saludo;

	//Seleccionando un elemento con pseudoclases de css(ultimo hijo p dentro de un contenedor de id=principal)
	//document.querySelector("#principal p:last-child").onclick = Saludo;
	
	//Esto apunta a un elemento en especial por indice, no se requiere guardar en una variable.
	//document.querySelectorAll("#principal p")[3].onclick = Saludo;

	//Guardando todos los elementos que cumplan con determinada caracteristica (p dentro de #principal y span dentro de la web)
	var elementos = document.querySelectorAll("#principal p, span");
	
	//Esto selecciona a todos mediante un for
	for(var i = 0; i < elementos.length; i++){
			elementos[i].onclick = Saludo;
	}
}

function Saludo(){
	alert("Hola gente de nayarit");
}

window.onload = Ejecuta;
