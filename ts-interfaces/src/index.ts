interface UserType{
    name:string,
    age:number
}

function greet(user:UserType){
    console.log("Hello " + user.name);
}

let me = {
    name:"Vansh",
    age:21
}

greet(me)

interface Todo{
    todo:{
        title:string,
        description:string
    },
    done:boolean
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