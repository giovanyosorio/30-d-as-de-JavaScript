function addNewAttr(array) {
    // Tu código aquí 👈
    console.log(array);
    const nuevoArray=array.map((element)=>{
        return {
            ...array,
            tax: Math.trunc(element.price* .19)
        }
    })
    console.log(nuevoArray);
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