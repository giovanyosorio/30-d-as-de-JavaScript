function checkArray(numbers) {
    // Tu código aquí 👈
    console.log(numbers);
    const isPar=numbers.some((item)=>item %2 ==0)
    console.log(isPar);
  }
checkArray([1, 3, 5, 7, 10, 11])
checkArray( [1, 3, 5])
checkArray([])