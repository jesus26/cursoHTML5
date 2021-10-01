//Contiene funcionalidad para el reproductor personalizado.

var miVideo, reproducir, barra, progreso, maximo, estado;

//ancho de la barra
maximo = 220;

function comenzar(){
	miVideo = document.getElementById("miVideo");
	reproducir = document.getElementById("reproducir");
	barra  =document.getElementById("barra");
	progreso = document.getElementById("progreso");

	//Listener para elementos que responderan a eventos
	reproducir.addEventListener("click", clicando, false);
	barra.addEventListener("click", cambiar, false);
}

//Creando funcion clicando
/*El objeto video acepta las siguientes propiedades:
- duration (duracion de video en segundos)
- currentTime (tiempo actual en segundos)
- paused (regresa true o false)
- ended (video terminado, regresa true o false)
Metodos: play(), Pause().
*/
function clicando(){
	//Reporducir video
	if((miVideo.paused == false) && (miVideo.ended == false)){
		miVideo.pause();
		reproducir.innerHTML = "Play";
	}else{
		miVideo.play();
		/*Modificar el texto del boton*/
		reproducir.innerHTML = "Pause";

		//Llamando funcion
		//Con la funcion setInterval se llama a una funcion cada cierto tiempo, incluso se sigue llamando si el video está pausado
		//como primer parámetro lleva el nombre de la funcion, como segundo lleva 
		//cada cuanto debe llamarse en milisegundos.
		bucle = setInterval(estado, 5); //Entre mas pequeño sea el segundo parámetro la barra crece mejor
	}
}

/*reflejar el estado del video*/
//Se llama cuando el video se esté reproduciendo.
function estado(){
	//comprobando que el video no haya terminado
	if(miVideo.ended == false){

		//Valor sacado con una regla de tres.
		var total = parseInt(miVideo.currentTime * maximo / miVideo.duration);

		//Modificar el estilo
		progreso.style.width = total + "px"; //+ como concatenador
	}else{
		reproducir.innerHTML = "Play";
	}
}

//Funcion para adelantar o retrasar el video
//PageX regresa donde se encuentra el ratón en el eje de las x (horizontal)
//Offsetleft - regresa cuanto hay de espacio desde el margen izquierdo(borde de página) hasta el inicio de la barra
function cambiar(posicion){
	if((miVideo.paused == false) && (miVideo.ended == false)){
		//Sacar posición del raton en el eje de x (desde borde izquierdo hasta el puntero)
		var ratonX = posicion.pageX - barra.offsetLeft; 
		//offsetLeft, regresa la cantidad de px entre el borde izquierdo y el elemento al que se le aplica

		//a que tiempo del video corresponde el resultado anterior.
		var nuevoTiempo = ratonX * miVideo.duration / maximo;

		miVideo.currentTime = nuevoTiempo;

		progreso.style.width = ratonX + "px";
	}
}

/*Al cargar la página se cargan los elementos para estar a la escucha*/
window.addEventListener("load",comenzar,false);