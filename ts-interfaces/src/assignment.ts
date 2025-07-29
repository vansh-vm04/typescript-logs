type User = {
    name:string,
    role:string
}

type Admin = {
    name:string,
    id:string
}

function greet(person:User|Admin):string{
    return "Welcome "+ person.name; 
}

greet({
    name:"Vansh",
    id:"Admin"
})