/* 
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/


let variableControl = true;
const ciudades = [];
let ciudadesAgregadas;

do {
    alert("Ingrese la ciudad que quiere agregar a la lista");
    ciudadesAgregadas = prompt("Ingrese la ciudad");

    // Comprobando si el usuario pulsa cancelar sin ingresar valor
    if (ciudadesAgregadas === null) {
        alert("No ingreso nada");
        variableControl = confirm("Cancelar si quiere salir | Aceptar si quiere volver a intentar");

        if (variableControl === false) {
            alert("Saliendo del programa");
            break;
        } else {
            continue;
        }
    }

    // Comprobando si el usuario ingreso un texto o un numero
    if (!isNaN(ciudadesAgregadas)) {
        alert("Ingreso un numero");
        variableControl = confirm("Quiere volver a intentar o salir?");
        if(variableControl === true){
            continue;
        }else{
            break;
        }
    } else {
        ciudades.push(ciudadesAgregadas);
    }

    variableControl = confirm("Quiere agregar otra ciudad o salir|ACEPTAR O CANCELAR|?");

} while (variableControl)


if (ciudades.length === 0) {
    document.write(`<h3>No agrego ninguna ciudad</h3>`);
} else {
    // Añadiendo en ultima posicion la ciudad de paris
    ciudades.push("Paris");

    document.write(`<h3>La lista de ciudades es: ${JSON.stringify(ciudades)}</h3>`);

    //Mostrando longitud del arreglo
    document.write(`<p>La longitud del arreglo es: ${ciudades.length}</p> <br>`);

    // Escribe por pantalla el elemento que ocupa la segunda posición.
    document.write(`<p>Elemento posicion 2: ${ciudades[1]}</p> <br>`);

    // Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
    document.write(`<p>Sustituiremos ${ciudades[1]} por Barcelona</p> <br>`);
    ciudades[1] = "Barcelona";
    
    if (ciudades.length >= 4) {

        // Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
        document.write(`Posicion 1: ${ciudades[0]} <br>
                        Posicion 3: ${ciudades[2]} <br>
                        Ultima posicion: ${ciudades[ciudades.length - 1]} <br>`);
    }

}

document.write(`Lista completa: <br> ${JSON.stringify(ciudades)}`);