class Student{

    #name;
    #lastname;

    constructor(name, lastname){
    this.#name=name
    this.#lastname=lastname
    }
    get fullname(){
        return `${this.#name} ${this.#lastname}`
    }

    static fromObject(obj){
        const {name,lastname}=obj
        return new Student(name,lastname)
    }


}


const studentsInfo=[
    {
        name:"ana", lastname:"Garcia",grades:[1,4,5,2,2.3]
    },
    {
        name:"luis", lastname:"perez",grades:[2,2.3]
    }
]

function calculateAverage(students){
    const averages=students.map(({name,lastname,grades})=>{
        const student=Student.fromObject({
            name,lastname
        })
        const scoreSum=grades.reduce((acum,score)=>acum+score)
        const average=scoreSum/grades.length

        return {
            fullname:student.fullname,
            average:average?.toFixed(2)?? "N/A"
        }
    })
    averages.forEach(({fullname,average})=>{
        console.log(`${fullname}: ${average}`)
    })
}
calculateAverage(studentsInfo)