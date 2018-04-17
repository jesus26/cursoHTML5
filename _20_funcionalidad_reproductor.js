//Contiene funcionalidad para el reproductor personalizado.

var miAudio, reproducir, barra, progreso, maximo, estado;

//ancho de la barra
maximo = 420;

function comenzar(){
	miAudio = document.getElementById("miAudio");
	reproducir = document.getElementById("play");
	barra = document.getElementById("barra");
	progreso = document.getElementById("progreso");

	//Listener para elementos que responderan a botones
	reproducir.addEventListener("click", clicando, false);
	barra.addEventListener("click", cambiar, false);
}

//Creando funcion clicando
/*El objeto audio acepta las siguientes propiedades:
Duration(duracion de video en segundos), currentTime(tiempo actual en segundos), Paused(regresa true o false), Ended(audio terminado, regresa true o false)
Metodos: play(), Pause().
*/
function clicando(){
	//Reporducir video
	if((miAudio.paused == false) && (miAudio.ended == false)){
		miAudio.pause();
		reproducir.innerHTML = "Play";
	}else{
		miAudio.play();
		/*Modificar el texto del boton*/
		reproducir.innerHTML = "Pause";

		//Llamando funcion
		//Con la funcion setInterval se llama a una funcion cada cierto tiempo
		//como primer parametro lleva el nombre de la funcion, como segundo lleva 
		//cada cuanto debe llmarse en milisegundos.
		bucle = setInterval(estado, 50); //Entre mas pequeño sea el segundo parametro la barra crece mejor
	}
}

/*reflejar el estado del video*/
//Se llama cuando el video se esté reproduciendo.
function estado(){
	//Verificar cuanto va del video
	if(miAudio.ended == false){
		//comprobando que no haya terminado

		//Valor sacado con una regla de tres.
		var total = parseInt(miAudio.currentTime * maximo / miAudio.duration);

		//Modificar el estilo
		progreso.style.width = total + "px"; //+ como concatenador
	}else{
		reproducir.innerHTML = "Play";
	}
}

//Funcion para adelantar o retrasar el video
//PageX regresa donde se encuantra el raton en el eje de las x
//Offsetleft- regresa cuanto hay del margen izquierdo hasta la barra
function cambiar(posicion){
	if((miAudio.paused == false) && (miAudio.ended == false)){
		//Sacr posicion del raton en x
		var ratonX = posicion.pageX-barra.offsetLeft;

		//a que tiempo del video corresponde el resultado anterior.
		var nuevoTiempo = ratonX * miAudio.duration / maximo;

		miAudio.currentTime = nuevoTiempo;

		progreso.style.width = ratonX + "px";
	}
}

window.addEventListener("load",comenzar,false);