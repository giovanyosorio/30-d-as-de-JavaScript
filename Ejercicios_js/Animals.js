class Animal {
    // Tu código aquí 👈
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    getInfo() {
        console.log(`${this.name} ${this.age} ${this.species}`)
    }
}

class Mammal extends Animal {
    // Tu código aquí 👈
    constructor(name, age, species, hasFur) {
        super( name, age, species);
        this.hasFur = hasFur;
    }
    getInfo() {
        console.log({...this,...this.hasFur});
    }
}

class Dog extends Mammal {
    constructor(name, age, species, breed) {
        super( name, age, species);
        this.breed = breed;
    }
    getInfo() {
        console.log({...this,...this.breed})
    }
    bark() {
        console.log("woof")
    }

}
const bird = new Animal("pepe", 1, "bird")
bird.getInfo()

const hippo = new Mammal("bartolo", 3, "hippo", false)
hippo.getInfo()

const dog = new Dog("fido", 4, "pastor aleman", true);
dog.bark()