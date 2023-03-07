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


    function addNewAttr(array) {
        // Tu código aquí 👈
        return array.map((item) => {
            const copyItem = {...item};
            console.log(copyItem);
            //copyItem.taxes = Math.trunc(copyItem.price * 0.19)
           // return copyItem;
          });
            

      }
      

      addNewAttr([
        {
          name: "Product 1",
          price: 1000,
          stock: 10
        },
        {
          name: "Product 2",
          price: 2000,
          stock: 20
        }
      ])