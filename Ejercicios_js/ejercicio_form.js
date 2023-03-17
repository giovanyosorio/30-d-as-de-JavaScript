function validateForm(formData, registeredUsers) {
    // Tú código aquí 👈


    if (!formData.name || !formData.lastname || !formData.name || !formData.email || !formData.password) {
        throw new Error("Faltan los siguientes campos: name, email, etc...");
    } 
    
        const { name, lastname, email } = formData;
        const duplicatedEmail = registeredUsers.some((user) => user.email === email);
        if (duplicatedEmail) {
            throw new Error('Error email duplicado');
          }
        registeredUsers.push({ name, lastname, email });
        console.log(`tu registro fue exitoso ${formData.name}`);
        console.log(registeredUsers);


}
const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
}

const registeredUsers = [{
        name: "Pedro",
        lastname: "Gomez",
        email: "pedro@example.com"
    },
    {
        name: "Maria",
        lastname: "Garcia",
        email: "maria@example.com"
    },
]


validateForm(formData, registeredUsers)
