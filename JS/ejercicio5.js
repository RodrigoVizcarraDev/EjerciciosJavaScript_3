// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const Mayus_minus_ambas = (cadenaTexto) =>{
    if(cadenaTexto === cadenaTexto.toUpperCase()){
        console.log("La cadena esta conformada solo por mayusculas");
    }else if(cadenaTexto === cadenaTexto.toLowerCase()){
        console.log("La cadena esta conformada solo por minusculas");
    }else{
        console.log("La cadena esta conformada por mayusculas y minusculas");
    }
}

Mayus_minus_ambas("RODRI");
