/*
Agustin Berasain Ruffo
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	/*
	if(edad>17)
	{
		alert("Usted es mayor de edad.");
	}

	if(edad<18 && edad>12)
	{
		alert("Usted es un adolescente.");
	}

	if(edad<13)
	{
		alert("Usted es niño");
	}
	*/
	
		if(edad<13)
		{
			alert("Usted es niño");
		}
		else
		{
			if(edad>17)
			{
				alert("Usted es mayor");
			}
			else
			{
				alert("Usted es adolescente");
			}
		}
}


/*
Agustin Berasain Ruffo
*/