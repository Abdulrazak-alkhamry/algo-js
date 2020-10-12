const readlineSync = require("readline-sync");


let min = readlineSync.question('Inter a minimum number please');
let max = readlineSync.question('Inter a maximum number please');
let current = readlineSync.question('Inter a current number please');


if (min >= current <= max) {
    console.log(current);
} else {
    console.log("Error: you don't understand anything ");
}

