const readlineSync = require("readline-sync");


let userAge = readlineSync.question('How old are you?');

let age = 18;

if (userAge >= age) {
    console.log("You are an adult");
} else {
    console.log("You are not yet an adult");
}