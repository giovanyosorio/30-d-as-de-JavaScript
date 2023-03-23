class User {
    // Tu código aquí 👈

    constructor(name, age) {
        this._name = name
        this._age = age
        this._friends = []
        this._messages = []
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this.age;
    }
    set name(age) {
        this._age = age;
    }
    addFriend(friend) {
        this._friends.push(friend)
    }
    sendMessage(message, friend) {
        if (this._friends.some(friends => friends.name === friend.name))
            this._messages.push(message)
        friend._messages.push(message)
    }


    showMessages() {
        return this._messages
    }
}
const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

usuario1.showMessages()