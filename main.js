import {names} from './data.js';

let DalidaAgency = {
    agencyName: "DalidaSMM",
    employeesNum: 7,
    employees: [],
    moreThanTenEmp: false
}

DalidaAgency.office = "Kabanbay st. 22";
DalidaAgency["yearEstablished"] = 2022;

let {employees, yearEstablished} = DalidaAgency;


let pushEmp = (arr) =>{
    employees.push(...arr);
    // or employees = [...arr]; 
}

pushEmp(names);

console.log(employees);

// get employees with length>5
let filterEmp = ()=>{
    return employees.filter((name)=>name.length>5);
}

let filteredEmp = filterEmp(); 

console.log(filteredEmp);

let addSuffix = () =>{
    return employees.map((x)=>{
        return `${x} from DalidaSMM`;
    })
}
let namesWithSuffix = addSuffix();
console.log(namesWithSuffix);

let getChiefOfficers = () =>{
    let chiefs = employees.slice(0,2);
    return chiefs;
}

let chiefOfficers = getChiefOfficers();
console.log(chiefOfficers);

function establishedThisYear(year){
    return(year===2022 ? true:false);
}

if (establishedThisYear(yearEstablished)){
    console.log("The company was established in 2022");
}else{
    console.log(`The company was established in ${yearEstablished}`);
}


