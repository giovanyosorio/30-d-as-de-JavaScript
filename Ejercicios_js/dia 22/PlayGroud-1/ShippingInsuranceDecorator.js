import {
    Product
} from "./Product.js";

export class ShippingInsuranceDecorator extends Product {
    constructor(product) {
        // Tu código aquí 👈
        super()
        this.product = product
    }

    getPrice() {
        // Tu código aquí 👈
        return this.product.getPrice() + 20
    }

    getDescription() {
        // Tu código aquí 👈
        return this.product.getDescription() + " con seguro de envío"
    }
}