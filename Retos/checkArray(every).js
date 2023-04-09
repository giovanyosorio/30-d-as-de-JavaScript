function checkArray(array) {
    // Tu código aquí 👈
    if (array.length==0) {
        return false
    }
    else
{
    return array.some((item)=>item%2==0)
}

  }
  
  checkArray([2, 4, 6, 8, 10])
checkArray([1, 3, 5, 7, 10, 11])
checkArray( [1, 3, 5])
checkArray([])