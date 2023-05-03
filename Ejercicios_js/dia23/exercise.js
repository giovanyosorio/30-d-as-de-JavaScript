export class MessagesProxy {
    constructor(messages, user) {
        // Tu código aquí 👈
        this.messages = messages
        this.user = user
    }

    sendMessage(text) {
        // Tu código aquí
        if (this.user.isLoggedIn()) {
            return this.messages.sendMessage(text)
        } else {
            throw new Error("Usuario no registrado");
        }

    }

    getHistory() {
        if (this.user.isLoggedIn()) {
            return this.messages.getHistory()
        } else {
            throw new Error("Usuario no registrado");
        }
    }
} 