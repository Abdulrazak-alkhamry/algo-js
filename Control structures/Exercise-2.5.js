const readlineSync = require("readline-sync");

let j = parseInt(readlineSync.question('Give me a number please'));

while (j !== 42) {
    console.log("Are you sure ?");
    j = parseInt(readlineSync.question('Give me a number please'));
}




