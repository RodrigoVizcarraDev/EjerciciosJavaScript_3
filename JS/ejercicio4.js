// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const parImpar = (numero) =>{
    numero % 2 === 0 ? console.log("El numero es par") : console.log("El numero es impar");
}

parImpar(7);
parImpar(4);