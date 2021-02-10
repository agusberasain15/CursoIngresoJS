/*
Agustin Berasain Ruffo
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt (precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt (precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt (precio3);

    suma = precio1 + precio2 + precio3;
    suma = suma.toFixed(2);

    alert ("La suma es $" + suma);

}

function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;
    
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt (precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt (precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt (precio3);

    suma = precio1 + precio2 + precio3;

    promedio = suma / 3;
    promedio = promedio.toFixed(2);

    alert ("El promedio es $" + promedio);
	
}

function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt (precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt (precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt (precio3);

    suma = precio1 + precio2 + precio3;
    
    iva = suma * 21 / 100;
    
    resultado = suma + iva;
    resultado = resultado.toFixed(2);

    alert ("El precio final es $" + resultado);

}

/*
Agustin Berasain Ruffo
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/