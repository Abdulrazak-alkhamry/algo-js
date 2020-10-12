const readlineSync = require("readline-sync");


let userName = readlineSync.question('Can you give me your firstname please?');
console.log("Hello " + userName);