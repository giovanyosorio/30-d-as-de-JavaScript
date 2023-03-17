function sortByAvailabilityAndPrice(products) {
    // Tu código aquí 👈
    let sort=[...products]
    
    sort.sort((a, b) => a.price - b.price);
    sort.sort((a, b) =>  b.inStock-a.inStock);
    return sort;
    return products;
  }
  const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
  ]
  
  sortByAvailabilityAndPrice(products)