import {
    Product
} from "./Product.js";

export class WarrantyDecorator extends Product {
    constructor(product) {
        // Tu código aquí 👈
        super()
        this.product = product
    }

    getPrice() {
        // Tu código aquí 👈
        //return `${this.product.price() + 20} con garantía `
        return this.product.getPrice() + 20
    }

    getDescription() {
        // Tu código aquí 👈
        return this.product.getDescription() + " con garantía"
    }
}