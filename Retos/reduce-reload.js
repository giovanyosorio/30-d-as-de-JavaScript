const items=[1,2,3,4,5,5,5]

const res=items.reduce((obj,item)=>{
    if (!obj[item]) {
        obj[item]=1
    }else{
        obj[item]=obj[item]+1
    }
    return obj
},{})

console.log(res);


const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const rta2= data
  .map((item)=>item.level)
  .reduce((obj,item)=>{
    if (!obj[item]) {
        obj[item]=1
    }else{
        obj[item]=obj[item]+1
    }
    return obj
},{})

console.log(rta2);

const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];


const reduce=arr.reduce((obj,item)=>{
    if (item<=5) {
        obj["1-5"]++
    }
    if (item>5 && item<9) {
        obj["6-9"]++
    }
    if (item>=9 && item<=10) {
        obj["9-10"]++
    }
    return obj
},{
    '1-5': 0,
    '6-9': 0,
    '9-10': 0
  })
    console.log(reduce)
/* [1-5]:0
   [6-8]:0
   [9-10]:0  */