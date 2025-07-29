interface UserType{
    name:string,
    age:number
}

// function greet(user:UserType){
//     console.log("Hello " + user.name);
// }

let me = {
    name:"Vansh",
    age:21
}

// greet(me)

//optional parameters using "?"
interface Todo{
    todo:{
        title:string,
        description?:string
    },
    done?:boolean
}

let task1:Todo = {
    todo:{
        title:"Go gym",
        description:"Go gym at 8 pm"
    },
    done:false
}

function showTask(task:Todo){
    console.log((task.todo.title + " ") + (task.done ? "Done" : "Not Done"))
}

showTask(task1);

interface Address{
    city:string,
    pincode:number,
    country:string
}
//interface using another interface
// interface User{
//     name:string,
//     address:Address
// }

//------
interface People{
    name:string,
    age:number,
    greet?:()=>string
}

let person:People = {
    name:"Vansh",
    age:21,
    // greet:()=>"Hi Vansh"
}

// let greeting = person.greet();
// console.log(greeting)

//interface are blueprint for a class that how should it look
class Manager implements People{
    name:string
    age:number

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

let user = new Manager("john",30);
console.log(user.age)

class CEO extends Manager{
    constructor(name:string,age:number){
        super(name,age)
    }
}

abstract class SocialMedia{
    constructor(){}
    abstract post():string
}

class twitter extends SocialMedia{
    constructor(){
        super()
    }

    post=()=>{
        return "Hello"
    }
}

//arrays as a type 
function getMax(arr : number[]):number{
    let max = 0;
    for(let i =0;i<arr.length;i++){
        max = Math.max(max,arr[i]);
    }
    return max;
}

interface user{
    name:string,
    age:number,
    addresses:string[]
}

function validUser(user:user[]):user[]{
    let valid:user[] = user.filter((u)=>u.age>18);
    return valid;
}

