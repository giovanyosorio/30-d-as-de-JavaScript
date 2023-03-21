function arrayModified() {
    // Tu código aquí 👈
    Array.prototype.filter = function (callback) {
        const out = []
        for (const iterator of this) {
            if (callback(iterator) === true) 
            out.push(iterator)
            console.log(out);
        }
    }
    

}
const numeros = [1, 2, 3, 4, 5];
arrayModified(numeros)