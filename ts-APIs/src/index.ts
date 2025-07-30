type User = {
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}
//Pick specific properties from interface or type
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

//Allow some properties from a interface or type
type PartialProps = Partial<User>

function updateUser(updateProps:PartialProps){
    console.log("Done")
}
updateUser({
    name:"hello"
})

const user = {
    name:"Vansh",
    age:21
}
//We can change internal values of an constant object or array
user.name = "Harkirat"

//We can restrict this change using readonly property
type ConstUser = {
    readonly name:string,
    readonly age:number
}

const user2 : ConstUser = {
    name:"Vansh",
    age:21
}

//To make whole object Readonly
const user3 : Readonly<PartialProps> = {
    name:"Vansh",
    age:21
}
//Now we cannot change this -- TS complains
// user2.name = "Harkirat"

type UserAge = {
    [key:string] : number
}

const users:UserAge = {
    "Vansh":21
}

//Lets understand records and Maps in TS
//Records are only in TS
type Student = Record<string,number>

const students : Student = {
    "Vansh":21,
    "Jai" : 22
}

//Maps are also in JS
const admins = new Map<string,object>()

admins.set("Vansh",{name:"Vansh",age:21})

console.log(admins.get("Vansh"))

//Exclude in TS -- opposite of pick
type EventType = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude<EventType, 'scroll'>

const events:ExcludeEvent = 'click'

