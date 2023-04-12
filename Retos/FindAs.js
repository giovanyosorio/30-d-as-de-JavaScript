function findAs(deck) {
    // Tu código aquí 👈
    if (deck.includes("AS")) {
      return "Tienes el AS"
    } else if (deck.length == 0) {
      return "No, tienes el AS"
    } else {
      return "No, tienes el AS"
    }
  }
  
  findAs(['diamonds', 'hearts', 'spades', 'AS'])
  findAs([])