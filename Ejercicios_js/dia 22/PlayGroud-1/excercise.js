import {
    Product
} from "./Product.js";

export class BasicProduct extends Product {
    constructor(price, description) {
        // Tu código aquí 👈
        super()
        this.price = price
        this.description = description
    }

    getDescription() {
        // Tu código aquí 👈
        return this.description
    }
}