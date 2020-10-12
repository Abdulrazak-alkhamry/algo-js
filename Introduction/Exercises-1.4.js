const readlineSync = require("readline-sync");


let firstname = readlineSync.question('Can you give me your firstname please?');
let name = readlineSync.question('Can you give me your name please ?');
let city = readlineSync.question('Where do you live please ?');

console.log('Your name is ' + firstname + ' ' + name + ' and you live in ' + city);