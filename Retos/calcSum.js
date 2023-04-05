function calcSum(numbers) {
    // Tu código aquí 👈
    console.log(numbers);
    let reducer=numbers.reduce((acum,current)=>acum+current,0)
    console.log(reducer);
    // console.log(numbers.reduce((count, item) => count + item, 0));
}

calcSum([2, 4, 8])