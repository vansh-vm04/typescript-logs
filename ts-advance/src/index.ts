
//Ts supports ES6 imports like -:
import express from "express"

//Ts exports
export const func=()=>{
    console.log("new function")
}


type KeyInput = "up" | "down" | "left" | "right";

//enums
//final values stored at runtime are still numbers like {0,1,2}
enum Direction {
    Up, // Up -> 0
    Down, //Down -> 1
    Left = "left",
    Right = "right"
}

function game(keypressed:Direction){
    console.log("Move " + keypressed)
}

game(Direction.Down)
game(Direction.Left)


//Generics
// type Input = number | string

// function firstEl(arr:Input[]){
//     return arr[0]
// }

// const value = firstEl([1,2,3,"vansh","harkirat"])
// console.log(value.toUpperCase());

function identity<T>(arg:T[]){
    return arg[0];
}

let output1 = identity(["vansh"]);
let output2 = identity([2282])

console.log(output1.toUpperCase())