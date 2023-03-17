function addNewAttr(array) {

 
    array.map((item)=>{
        const copia={...item}
        copia.taxes=copia.price*0.19
        console.log(copia);
    })
 

}

addNewAttr([{
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