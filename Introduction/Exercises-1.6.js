const readlineSync = require("readline-sync");


let firstnumber = readlineSync.question('Can you put an integer number please?');
let secondnumber = readlineSync.question('Can you put another integer number please?');

console.log(firstnumber / secondnumber);