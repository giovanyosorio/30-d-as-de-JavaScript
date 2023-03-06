function getStudentAverage(students) {
    // Tu código aquí 👈
    console.log(students)

    for (const iterator of students) {
        console.log(students.length+1);

        let average=iterator.grades.reduce((acum,currentval) => acum+currentval)
        let result=average/4
        console.log(result);
      
    }
  }
  
getStudentAverage([
    {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name: "Maria",
      grades: [92, 81, 80, 96],
    },
  ])
  