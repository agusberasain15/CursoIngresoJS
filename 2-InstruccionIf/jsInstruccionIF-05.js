/*
Agustin Berasain Ruffo
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

/*   	if(!(edad<18 && edad>12))
	{
		alert("Usted no es un adolescente.");
	}
*/
	
	if(edad>17||edad<13)
	{
		alert("Usted no es adolescente");
	}
}

/*
Agustin Berasain Ruffo
*/