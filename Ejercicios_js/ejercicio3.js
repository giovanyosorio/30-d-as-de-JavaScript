function createTaskPlanner() {
    // Tu código aquí 👈
    let tasks = []

    return {
        addTask(task) {
            //console.log(task)
            tasks.completed = false
            tasks.push(task)
            console.log(tasks);
        },
        removeTask(value) {
            if (typeof value === "number") {
                tasks = tasks.filter((task) => task.id !== value);
            } else {
                tasks = tasks.filter((task) => task.name !== value);
            }
        },
        getTasks() {
            console.log(tasks)
        },
        getPendingTasks() {
            const pending = tasks.filter((task) => !task.completed);
            console.log("pending");
            console.log(pending)
        },
        getCompletedTasks() {
            const completed = tasks.filter((task) => task.completed);
            console.log("completede");
            console.log(completed)
        },
        markTaskAsCompleted(value) {
            // primero declaramos la variable de index
            // la cual tendrá el indice de la posición del elemento
            let index;

            // buscamos el indice dependiendo el valor
            if (typeof value === "number") {
                // buscamos por index dependiendo si es por id
                index = tasks.findIndex((task) => task.id === value);
            } else {
                // O por name
                index = tasks.findIndex((task) => task.name === value);
            }

            // Al final con ese indice modificamos la propiedad de completed a true
            tasks[index].completed = true;
        },
        getSortedTasksByPriority() {
            // Para ordenar las tareas sin modificar el array original
            // solamente hacemos una copia del array y ejecutamos sort sobre este
            const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
            // Al final lo retornamos
            console.log(sortedTasks);
        },
        filterTasksByTag(tag) {
            const filterByTag = tasks.filter((task) => task.tags.includes(tag));
            console.log(filterByTag);
        },
        updateTask(taskId, updates) {
            // obtenemos el id como lo hicimos previamente
            const index = tasks.findIndex((task) => task.id === taskId);
            // agregamos las propiedades extras destructurando ambos objetos
            tasks[index] = {
                ...tasks[index],
                ...updates
            };
            console.log(tasks);
        }

    }
}
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});
planner.filterTasksByTag("shopping")
planner.updateTask(1,"mundo")
/*
planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});
planner.markTaskAsCompleted("Llamar a Juan")
planner.getPendingTasks()
planner.getCompletedTasks()
planner.removeTask(2)
planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});
planner.getTasks()
planner.getSortedTasksByPriority()
*/