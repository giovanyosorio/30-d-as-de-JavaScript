function processShoppingList(list) {
    // Tu código aquí 👈
            list.forEach(element => {
                element.price*=element.quantity
                if (element.name.includes("oferta")) {
                    element.price -= element.price*.2;
                    console.log(element.price);
                }
                delete element.quantity;
                console.log(element);
    });
    console.log(list.reduce((total,element)=>total+element.price,0));
    

}

const shoppingList = [{
        name: "pan",
        price: 20,
        quantity: 2
    },
    {
        name: "leche",
        price: 25,
        quantity: 1
    },
    {
        name: "oferta manzanas",
        price: 10,
        quantity: 3
    },
]

processShoppingList(shoppingList)

//89