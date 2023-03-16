        function searchValue(array, value) {
            // Tu código aquí 👈
            //console.log(array);
            //console.log(value);
            let newArray = array.flat(1)
            console.log(newArray);
            if (!newArray) {
                throw new Error("Valor no encontrado")
            }

            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                console.log(element);
                if(element.includes(value)){
                    console.log({row:i,colum:element.indexOf(value)});
                }
            }
    }

        const array = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]

        const value = 6

        searchValue(array, value)