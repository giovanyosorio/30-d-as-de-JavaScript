export class User {
    constructor(name) {
        // Tu código aquí 👈
        this.name = name
        this.isLogged = false
    }

    login() {
        // Tu código aquí 👈
        this.isLogged = true

    }

    logout() {
        this.isLogged = false
        // Tu código aquí 👈
    }

    isLoggedIn() {
        // Tu código aquí 👈cccccccccccc
        return this.isLogged
    }
}