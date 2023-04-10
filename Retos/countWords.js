function countWords(array) {
    // Tu código aquí 👈
   
    const count=array.flatMap((item)=>item.split(" ").length).reduce((sum,item)=>sum+item,0)
    
    console.log(count);
    console.log(array.flatMap((item)=>item.split(" ")));
  
  }
  
  countWords(["Beautiful is better than ugly","Explicit is better than implicit"])