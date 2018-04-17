/*Apuntar a todos los elementos dentro de un contenedor con query selector all*/
function Ejecuta(){
	
	//Detectar elemento p que esté en primera posición
	//document.getElementsByTagName("p")[0].onclick = Saludo;

	//Detectar un elemento por el id
	//document.getElementById("importante").onclick = Saludo;;
	
	//Seleccionar a un elemento por su clase, regresa un array y se debe pasar el índice del numero del elemento 
	//document.getElementsByClassName("import")[0].onclick = Saludo;

	//Apunta al primer p dentro de un elemento con id principal (si no se pasa un indice se debe guardar en una variable).
	//document.querySelectorAll("#principal p")[0].onclick = Saludo;

	//Guardando en un array los elementos de varios grupos separados por coma(,), a todos los p dentro de #principal y 
	//span dentro de la pagina
	//var elementos = document.querySelectorAll("#principal p, span");
	
	//Seleccionando a todos los elementos del array
	/*for(var i = 0; i < elementos.length; i++){
			elementos[i].onclick = Saludo;
	}*/

	//Recorrer elementos sin guardarlos en una variable (array)
	for(var i = 0; i < 4; i++ ){
		document.getElementsByTagName("p")[i].onclick = Saludo;
	}
}

//Declarando función
function Saludo(){
	alert("Aprendiendo JavaScript");
}

//Cuando cargue la página se ejecuta la función Ejecuta(), en el archivo js no se ponen parentesis cuando se llama a una función
//Llamando función ejecuta
window.onload = Ejecuta;


//Video 14
//Devuelve el primer elemento de la pagina web que coincide con el selector(parametro)
/*function ejecuta(){
	document.querySelector(".import").onclick=saludo;
}*/

//Seleccionando un elemento con pseudoclases de css(ultimo hijo p dentro de un contenedor de id=principal)
/*function ejecuta(){
	document.querySelector("#principal p:last-child").onclick=saludo;
}*/