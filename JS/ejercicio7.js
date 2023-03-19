// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


let tabla = `<table>`;

let numeroMultiplicacion = parseInt(prompt("Ingrese un numero para mostrarle su tabla de multiplicar del 1 al 10"));

for(let i = 1; i <= 10; i++){
    tabla+=`<tr>`;
    tabla+=`<td>${numeroMultiplicacion} x ${i} = ${numeroMultiplicacion * i}</td>`;
    tabla+=`</tr>`;
}
tabla+=`</table>`;
document.write(tabla);