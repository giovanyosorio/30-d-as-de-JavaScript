function myMap(array, func) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) { 
      let element = func(array[i]);
      result.push(element);
    }
  
    console.log(result) ;
  }
  

//myMap([1,2,3,4])
myMap([
    {name: "michi", age: 2},
    {name: "firulais", age: 6}],
    (pet) => pet.name)

    myMap([1,2,3,4], (num) => num * 2)
