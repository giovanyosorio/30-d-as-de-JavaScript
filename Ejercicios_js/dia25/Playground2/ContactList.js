class ContactList {
    constructor(size) {
        // Tu código aquí 👈
        this.buckets = new Array(size);
        this.numBuckets = this.buckets.length;
    }

    hash(name) {
        let total = 0;
        for (let i = 0; i < name.length; i++) {
            total += name.charCodeAt(i);
        }
        return total % this.numBuckets;
    }

    insert(name, phone) {
        // Tu código aquí 👈
        let index = this.hash(name);
        // si ese bucket no existe, se inicializa como un array vacío.
        if (!this.buckets[index]) {
            this.buckets[index] = [];

        }
        this.buckets[index].push([name, phone]);
    }

    get(name) {
        // Tu código aquí 👈
        let index = this.hash(name);
        // si ese bucket no existe, se retorna null.
        if (!this.buckets[index]) {
            return null
        }
        // Si el bucket existe, se recorre el array en busca de un arreglo 
        // que tenga la key especificada
        for (let i = 0; i < this.buckets[index].length; i++) {

            // Si se encuentra ese bucket, se retorna su value correspondiente. 
            if (this.buckets[index][i][0] === name) {
                return this.buckets[index][i][1];
            }
        }

        //Si no se encuentra la key, se retorna null.
        return null;
    }

    retrieveAll() {
        // Tu código aquí 👈
        // Esta función retorna un array con todos los valores almacenados
        // Se recorren todos los buckets y, si existen, se agrega cada value a un array
        let allValues = [];
        for (let i = 0; i < this.numBuckets; i++) {
            if (this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    allValues.push(this.buckets[i][j][1]);
                }
            }
        }
        // Para finalmente retornarlo.
        return allValues;
    }

    delete(name) {
        // Tu código aquí 👈
        let index = this.hash(name);

        // si ese bucket no existe, se retorna null.
        if (!this.buckets[index]) {
            return null
        }
        if (this.buckets[index]) delete this.buckets[index]

    }
}