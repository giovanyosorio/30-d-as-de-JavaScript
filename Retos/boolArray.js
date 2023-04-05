/* Retorna un booleano si todos los elementos son pares */

function checkArray(array) {
    // Tu código aquí 👈


    return array.length==0 ? false : array.every((item)=>item%2==0)
  }
  checkArray([2, 4, 6, 8, 10])
  checkArray( [1, 3, 5, 7, 10, 11])
  checkArray([1, 3, 5])
  checkArray([])