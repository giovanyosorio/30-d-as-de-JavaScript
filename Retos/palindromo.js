
function palindromo(palabra) {

    let palabraSinEspacios = palabra.replace(/ /g, "");
    console.log(palabraSinEspacios);
    let palabraInvertida = palabraSinEspacios.split("").reverse().join("");

    if (palabraSinEspacios === palabraInvertida) {
        console.log("La palabra " + palabra + " es un palindromo");
    } else {
        console.log("La palabra " + palabra + " no es un palindromo");
    }
}

palindromo("anita lava la tina")
