/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

// Math.random() genera un numero aleatorio entre 0 y 1, por ejem: 0.15 
// a ese valor lo vamos a multiplicar por 6, generara un numero entre 0 y 6, pudiendo generar numeros decimales(float)
// para solventar el hecho de que devuelve 0 y queremos que devuelva entre 1 y 6 le sumamos + 1
// tener en cuenta que primero se resuelve la multiplicacion y despues la suma
// Math.random() * 6 + 1 va a darns un numero entre 1 y 6, pudiendo dar decimales como 5.5 o  6.7
// Pero queremos solo numeros de 1 a 6, como hacemos?
// Para eso esta el metodo Math.floor(Math.random() * 6 + 1) debemos poner dentro todo lo anterior 
// Math.floor() lo que hace es redondear nuestro numero con tendencia hacia abajo, por lo tanto
// Si obtenemos 6.7, lo va a redondear a 6 directamente.

let numeroAleatorio1;
let numeroAleatorio2;
let resultadosSumas = [];
let numeroSuma_resultadoSuma = [];

let aparicionesSumas = [];
for(let i = 1; i < 51; i++){

    numeroAleatorio1 = Math.floor(Math.random() * 6 + 1);
    numeroAleatorio2 = Math.floor(Math.random() * 6 + 1);
    resultadosSumas.push(numeroAleatorio1 + numeroAleatorio2);
}

