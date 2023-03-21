    class Car {
        // Tu código aquí 👈
        constructor(brand,model,year,mileage){
            this.brand=brand;
            this.model=model;
            this.year=year;
            this.mileage=mileage;
            this.state=false
        }


    }
    class Auto extends Car {
        // Aquí no es necesario el agregar el constructor si no se esperan
        // nuevos parametros
        turnOn() {
            this.state=true
            console.log("encendiendo el auto");
        }
        turnOff() {
            this.state=false
            console.log(this.state);
            console.log("Apagando auto!");
        }

        drive(kilometers) {
            if (!this.state) {
                console.error("el auto esta apagado");
            }
            console.log(this.mileage+=kilometers);
        }
    }

    const toyota = new Auto("Toyota", "Corolla", 2020, 0);
    toyota.turnOn()
    toyota.drive(100)
    