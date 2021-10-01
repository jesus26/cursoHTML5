/*
Nuevos métodos para identificar elementos
querySelector()
Retorna el primer elemento que cumple con las características de los parámetros

querySelectorAll()
Retorna todos los elementos que cumplen con las características de los parámetros,
se regresa un array con los elementos en el mismo orden con el que se encuentran
en el documento (página)

entre los parentesis van los selectores css3 que queramos
*/

function Ejecuta(){
	//Devuelve el primer elemento de la pagina web que coincide con el selector (parámetro)
	//document.querySelector(".import").onclick = Saludo;

	//Seleccionando un elemento con pseudoclases de css (último hijo <p> dentro de un contenedor con id=principal)
	//document.querySelector("#principal p:last-child").onclick = Saludo;
	
	//Esto apunta a un elemento en especial por indice, no se requiere guardar en una variable.
	//document.querySelectorAll("#principal p")[3].onclick = Saludo;

	//Guardando todos los elementos que cumplan con determinada caracteristica (<p> dentro de #principal y span dentro de la web)
	//Regresa un array
	var elementos = document.querySelectorAll("#principal p, span");
	
	//Recorre array y asigna función
	for(var i = 0; i < elementos.length; i++){
			elementos[i].onclick = Saludo;
	}
}

function Saludo(){
	alert("Hola gente de nayarit");
}

window.onload = Ejecuta;
