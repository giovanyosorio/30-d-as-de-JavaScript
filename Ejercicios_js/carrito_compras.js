import {
    Product
} from "./product";

export class Article extends Product {
    // Tu código aquí 👈
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }
    addToCart() {
  
        return `Agregando : ${this.quantity} unidades del articulo ${this.name} al carrito`
    }
}

export class Service extends Product {
    // Tu código aquí 👈
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }
    addToCart() {
        return `Agregando el servicio : ${this.name} al carrito`
    }
}

export class Cart {
    // Tu código aquí 👈
    constructor(products = []) {
        this.products = products
    }
    addProduct(product) {
        product.addToCart()
        this.products.push(product)
    }
    deleteProduct(product) {
        let index = this.products.findIndex(item => item.name === product.name)
        this.products.splice(index, 1)
    }
    calculateTotal() {
        let total
        return this.products.reduce((total, item) => {
            total += item.price * item.quantity
            return total
        }, 0)
    }
    getProducts() {
        return this.products
    }
}
