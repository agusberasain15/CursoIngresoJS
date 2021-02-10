/*
Agustin Berasain Ruffo
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/*if(edad>12)
	{
		if(edad<18)
			{
				alert ("Usted es un adolscente.")
			}
		
	}
	*/

	if(edad<18 && edad>12)
	{
		alert("Usted es un adolescente.");
	}
}

/*
Agustin Berasain Ruffo
*/

