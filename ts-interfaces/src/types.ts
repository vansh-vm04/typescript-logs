type SumInput = string | number;

function sum(a:SumInput,b:SumInput){
     if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        throw new Error("Cannot mix string and number in sum.");
    }
}

interface Employee{
    name:string,
    department:"string"
}
interface Manager{
    name:string,
    age:number
}

type TeamLead = Manager & Employee;

// {
//     name:string,
//     age:number,
//     department:"string"
// }