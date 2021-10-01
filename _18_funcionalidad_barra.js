//Contiene funcionalidad para el reproductor personalizado.

var miVideo, reproducir;

function comenzar(){
	miVideo = document.getElementById("miVideo");
	reproducir = document.getElementById("reproducir");
	
	//Listener para elementos que respon deran a eventos
	reproducir.addEventListener("click", clicando, false);
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
	//Validar que el video no esté pausado ni haya terminado
	if((miVideo.paused == false) && (miVideo.ended == false)){
		miVideo.pause();
		reproducir.innerHTML = "Play";
	}else{
		//En caso de que el video esté pausado y haya terminado
		miVideo.play();
		/*Modificar el texto del boton*/
		reproducir.innerHTML = "Pause";
	}
}

/*Al cargar la página se cargan los elementos para estar a la escucha*/
window.addEventListener("load",comenzar,false);