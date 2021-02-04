/*
Agustin Berasain Ruffo
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
*/

function mostrar()
{	
	let nombre;
	let edad;
	let respuesta;

	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	respuesta= "Usted se llama "+nombre+ " y tiene "+edad+" años.";

	alert (respuesta);
}

/*
Agustin Berasain Ruffo
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
*/

