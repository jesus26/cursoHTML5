//Comentarios
/*Comentarios varias lineas*/
function ejecuta(){
	//detectar los elemento p por nombre
	//document.getElementsByTagName("p")[0].onclick=mensaje;

	/*identificar todos los elementos*/
	/*for(var i = 0; i < 3; i++){
			document.getElementsByTagName("p")[i].onclick=mensaje; 
	}*/
	/*el método getElementTagByName regresa un arreglo por eso se especifica el indice del elemento*/

	//identificar elemento por id
	//document.getElementById("importante").onclick=mensaje;

	/*identificar elementos por clase getelementsByClassName*/
	/*for(var i = 0; i < 2; i++){
		var z = document.getElementsByClassName("important")[i].onclick=mensaje;
	}*/

	/*Nuevos métodos para identificar elementos
	querySelector() .- retorna el primer elemento que coincida con el grupo del parametro
	querySelectorAll() .- retorna todos los eelementos que coincidan con el grupo del parametro que se le pasa
	retorna un array con el mimsmo orden que se encuantran en el documento html
	*/
	//document.querySelector(".important").onclick=mensaje;
	//Apuntar al ultimo parrafo utilizando subclase
	//document.querySelector("#principal p:last-child").onclick=mensaje;

	//Apuntar a todos los elementos dentro de principal(para uno en especifico se le pasa el indice)
	//var elementos = document.querySelectorAll("#principal p")[0].onclick=mensaje;
	var elementos = document.querySelectorAll("#principal p, span"); /*Le decimos que afecte a todos los p dentro del elemento con id principal y ademas a todos los span que encuentre en la página*/
	for(var i = 0; i < elementos.length; i++){
		elementos[i].onclick=mensaje;
	}

}

function mensaje(){
	alert("Hola. Que hay de nuez");
}

window.onload=ejecuta;