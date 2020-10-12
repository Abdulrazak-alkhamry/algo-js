const readlineSync = require("readline-sync");


let shoessize = readlineSync.question('Can you put your shoes size please?');
let birthyear = readlineSync.question('Can you put your year of birth please?');

console.log(((shoessize * 2) + 5) * 50 - birthyear + 1766);