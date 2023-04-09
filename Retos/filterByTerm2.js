function filterByTerm(array, term) {
    // Tu código aquí 👈
    
    console.log(array.filter((item)=>item.includes(term)));
  }
  
  filterByTerm( ["ana", "santi", "nico", "anastasia"],"ana")