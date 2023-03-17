function hotelSystem(rooms) {
    // Tu código aquí
    let total = 0
    let reservas = []
    let arrayRooms = [];
    for (let index = 1; index <= rooms; index++) {
        arrayRooms.push(index)
    }
    return {
        searchReservation(id) {
            const findById = reservas.find((reserva) => reserva.id == id)
            //console.log(reserva.filter((element) => element.id == id))
            console.log("search Reservation");
            console.log(findById);
            if (!findById) {
                console.log("La reservación no fue encontrada");
            }
        },
        getSortReservations() {
            console.log("getSortReservations " + [...reservas].sort((a, b) => a.checkIn - b.checkIn))
        },
        addReservation(reservation) {
            //reserva.checkIn=false
            console.log("addReservation");
            reservas.push(reservation)
            console.log(reservas);
        },
        removeReservation(id) {
            reservas = reservas.filter((reserva) => reserva.id !== id);
            //console.log("remove reservation");
            console.log(reservas);


        },
        getReservations() {
            console.log(reservas);
        },
        getAvailableRooms(checkIn, checkOut) {
            if (reservas.length > 0) {
                reservas.forEach(element => {
                    if (new Date(element.checkIn) <= new Date(checkOut) &&
                        new Date(element.checkOut) >= new Date(checkIn)) {
                        let index = arrayRooms.findIndex((item => item == element.roomNumber))
                        arrayRooms.splice(index, 1);
                    }

                })
                console.log("aca availabe");
                console.log(arrayRooms);
            } else {
                console.log(arrayRooms);
            }
        }
    }
}
const hotel = hotelSystem(10);

hotel.addReservation({
    id: 1,
    name: "John Doe",
    checkIn: "01/01",
    checkOut: "02/01",
    roomNumber: 1,
});

hotel.addReservation({
    id: 2,
    name: "Pepe Doe",
    checkIn: "01/01",
    checkOut: "10/01",
    roomNumber: 9,
});

// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
hotel.getAvailableRooms("01/01", "05/01")