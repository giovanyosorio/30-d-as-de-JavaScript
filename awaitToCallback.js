import {
    doTask1,
    doTask2,
    doTask3
} from './tasks';

export async function runCode() {
    const strings = [];
    return doTask1()
    .then(rta1=>{strings.push(rta1);
    return doTask2()})
    .then(rta2=>{strings.push(rta2);
    return doTask3()})
    .then(rta3=>{strings.push(rta3);
        return strings})
    

        
    await doTask1((rta1)=>{strings.push(rta1)})
    await doTask2((rta2)=>{strings.push(rta2)})
    await doTask3((rta2)=>{strings.push(rta3)})
        return strings

    let result1 = await doTask1();
    strings.push(result1);
    let result2 = await doTask2();
    strings.push(result2);
    let result3 = await doTask3();
    strings.push(result3);
    return strings
}