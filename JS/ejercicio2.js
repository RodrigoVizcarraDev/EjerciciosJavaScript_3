/* 
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Paso a paso
1- Pedir mediante prompt el nombre de ciudad al Usuario y almacenarlo en un arreglo
2- Crear un While
    2a Si el usuario pulsa aceptar simplemente devuelve true, entramos nuevamente al while.
            - Dentro del while le volvemos a pedir una ciudad y la almacenamos en el arreglo
    2b Si el usuario pulsa cancelar retorna false, condicion de while no se cumple y salimos.
            - Al salir del while mostramos al usuario el arreglo con las ciudades

*/


let variableControl = true;
const ciudades = [];
let ciudadesAgregadas;

do{
    alert("Ingrese la ciudad que quiere agregar a la lista");
    ciudadesAgregadas = prompt("Ingrese la ciudad");

    // Comprobando si el usuario pulsa cancelar sin ingresar valor
    if(ciudadesAgregadas === null){
        alert("No ingreso nada");
        variableControl = confirm("Cancelar si quiere salir | Aceptar si quiere volver a intentar");

        if(variableControl === false){
            alert("Saliendo del programa");
            break;
        }else{
            continue;
        }
    }

    // Comprobando si el usuario ingreso un texto o un numero
    if(!isNaN(ciudadesAgregadas)){
        alert("Ingreso un numero");
        variableControl = confirm("Quiere volver a intentar o salir?");
        continue;
    }else{
        ciudades.push(ciudadesAgregadas);
    }
    
    variableControl = confirm("Quiere agregar otra ciudad o salir|ACEPTAR O CANCELAR|?");

}while(variableControl)

if(ciudades.length === 0){
    document.write(`<h3>No agrego ninguna ciudad</h3>`);
}else{
    document.write(`<h3>La lista de ciudades es: ${JSON.stringify(ciudades)}</h3>`);
}
