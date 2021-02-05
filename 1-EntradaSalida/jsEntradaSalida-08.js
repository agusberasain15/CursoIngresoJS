/*
Agustin Berasain Ruffo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resultado;
	
dividendo = document.getElementById("txtIdNumeroDividendo").value;
divisor = document.getElementById("txtIdNumeroDivisor").value;

dividendo = parseInt(dividendo);
divisor = parseInt(divisor);

resultado = dividendo % divisor;

console.log(resultado);
alert("El resto es " + resultado);
}

/*
Agustin Berasain Ruffo
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
*/
