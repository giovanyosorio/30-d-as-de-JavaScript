function checkInString(text, term) {
    // Tu código aquí 👈
    
    if (text.toUpperCase().includes(term) || text.toLowerCase().includes(term) ) {
            console.log("hola mundo");
    }
  else{
    console.log("paila")
  }
  }
checkInString("Ana lava la tina", "ana")  