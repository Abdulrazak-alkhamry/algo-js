const readlineSync = require("readline-sync");
let n = readlineSync.question("Give me a number ");
let total = 0;
for (let i = 0; i < n; i++) {
    total += parseInt(readlineSync.question("Give me a number to add "));
}
console.log(total);