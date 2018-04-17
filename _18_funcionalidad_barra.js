//Contiene funcionalidad para el reproductor personalizado.

var miVideo, reproducir;

function comenzar(){
	miVideo = document.getElementById("miVideo");
	reproducir = document.getElementById("reproducir");
	
	//Listener para elementos que responderan a eventos
	reproducir.addEventListener("click", clicando, false);
}

//Creando funcion clicando
/*El objeto video acepta las siguientes propiedades:
Duration(duracion de video en segundos), currentTime(tiempo actual en segundos), Paused(regresa true o false), Ended(video terminado, regresa true o false)
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
	}
}

/*Al cargar la página se cargan los elementos para estar a la escucha*/
window.addEventListener("load",comenzar,false);