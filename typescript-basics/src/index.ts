let x:number | string = 1;
x = "vansh"
console.log(x)

const greet = (firstname:string)=>{
    console.log("Hello "+firstname);
}

greet("vansh")

//Type inferencing
const add = (a:number,b:number):number=>{
    return a + b;
}
let ans = add(4,4);
console.log(add(1,2));

//Function that takes function as an argument

function delayedFunc(func:(a:number,b:number)=>number){
    setTimeout(()=>console.log(func(2,3)),1000);
}

delayedFunc(add);