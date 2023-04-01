function filterByTerm(array, term) {
    // Tu código aquí 👈
    let filter=array.filter((element)=>element.includes(term))
    console.log(filter);
    
  }
  filterByTerm(["ana", "santi", "nico", "anastasia"],"ana")