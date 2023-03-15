function groupProducts(products, category) {
    // Tu código aquí


    const result = products.filter(person => person.category == category);
    console.log(result);
    let suma=0
    let sumtotal = result.reduce((sum, item) => sum + item.price, 0);
    console.log(sumtotal);
    let productsname=result.map((item)=>item.name).join(',')
    console.log(productsname);
    console.log({products:productsname,totalPrice:sumtotal});
  }


  const products = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
  ];
  
  groupProducts(products, "Electronics")
  
