const readlineSync = require("readline-sync");


let firstnumber = readlineSync.question('Can you put a number with decimal part please?');
let secondnumber = readlineSync.question('Can you put another number with decimal part please?');

console.log(Math.trunc(firstnumber) * secondnumber); //Math.trunc(your variable) it will print you just the integer part of your deciaml number