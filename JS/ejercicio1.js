/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
*/

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

document.write(`<h2>Meses en lista</h2>`);

for(let i = 0; i < meses.length; i++){
    document.write(`<ul>`);

    document.write(`<li>`);
    document.write(`${meses[i]}`);
    document.write(`</li>`);

    document.write(`</ul>`);
}