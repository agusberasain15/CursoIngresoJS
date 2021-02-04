/* 
Agustin Berasain Ruffo
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	let nombre;
	let mensajeDeRespuesta;

	nombre= prompt("Ingrese su nombre");
	mensajeDeRespuesta="Su nombre es "+nombre;

	document.getElementById("txtIdNombre").value=mensajeDeRespuesta; //mostrando
}

/* 
Agustin Berasain Ruffo
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

