function protectDog(dog) {

    const protectedDog = Object.assign({}, dog)
    Object.freeze(protectedDog)
    for (let prop in protectedDog) {
      const value = protectedDog[prop]
      console.log("value "+value);
      if (typeof value == "object") {Object.freeze(value)}
    }
    console.log(protectedDog); 

}

protectDog({
    name: "Romeo",
    age: 3,
    owner: {
        name: "Victor",
        phoneNumber: "555-555-5555"
    },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
})

protectDog.owner.name = "Pedro"