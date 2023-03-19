// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// Ejemplo:


// Input:
// lado A = 24
// lado B = 5

// Output: 58

const calcularPerimetro = (lado_a, lado_b) => {
    let perimetro = 2 * (lado_a + lado_b);
    console.log(`El perimetro de su rectangulo es: ${perimetro}`);
}

const ladoA = parseInt(prompt("Ingrese el tamaño del lado A"));
const ladoB = parseInt(prompt("Ingrese el tamaño del lado B"));

calcularPerimetro(ladoA, ladoB);


