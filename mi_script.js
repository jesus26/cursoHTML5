//Comentario
//Alerta se ejecuta en cuanto abra la p+agina
//alert("Hola gente de nayarit");

//
//function ejecuta(){
	//detectar determinado elemento de la página html, regresa un array por eso se pasa el indice
//	document.getElementsByTagName("p")[0].onclick=saludo;

	//Detectar elemento por id, solo identifica un elemento
//	document.getElementById("importante").onclick=saludo;

	//Recorrer array para seleccionar varios elementos
	/*for(var i=0;i<4;i++ ){
		document.getElementsByTagName("p")[i].onclick=saludo;
	}*/


	//Seleccionar a un elemento por su clase, regresa un array y se debe pasar el indice
	//var s = document.getElementsByClassName("import")[0].onclick=saludo;

	//Seleccionar todos los elementos que tengan determinado nombre de clase
/*	for (var i = 0; i < 2; i++) {
		var s = document.getElementsByClassName("import")[i].onclick=saludo;
	};

}

//Una funcion solo se ejecuta cuando es llamada
function saludo(){
	alert("Hola gente de nayarit");
}

//Cuando cargue la ventana ejecutar la funcion
window.onload=ejecuta;

*/

//Video 14
//Devuelve el primer elemento de la pagina web que coincide con el selector(parametro)
/*function ejecuta(){
	document.querySelector(".import").onclick=saludo;
}*/

//Seleccionando un elemento con pseudoclases de css(ultimo hijo p dentro de un contenedor de id=principal)
/*function ejecuta(){
	document.querySelector("#principal p:last-child").onclick=saludo;
}*/

/*Apuntar a todos los elementos dentro de un contenedor con query selector all*/
function ejecuta(){
	//Esto apunta a uno en especial.
	//var elementos = document.querySelectorAll("#principal p")[0].onclick=saludo;

	//Obteniendo el tmaño del array, seleccionando varios grupos separados por coma(,)
	var elementos = document.querySelectorAll("#principal p, span");
	
	//Esto selecciona a todos mediante un for
	for(var i = 0; i < elementos.length; i++){
			elementos[i].onclick=saludo;
	}

}

function saludo(){
	alert("Hola gente de nayarit");
}

window.onload=ejecuta;