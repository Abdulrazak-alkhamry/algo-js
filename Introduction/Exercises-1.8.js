const readlineSync = require("readline-sync");
let story = ""
let questionsNumb = 3

let A = readlineSync.question('What would a clock look like with no numbers?');
questionsNumb = questionsNumb - 1
console.log(questionsNumb)
story = story + A


let B = readlineSync.question('How do you make 7 an even number?');
questionsNumb = questionsNumb - 1
console.log(questionsNumb)
story = story + B

let c = readlineSync.question('If you had 4 apples and 5 oranges in one hand and 6 apples and 7 oranges in the other, what would you have?');
questionsNumb = questionsNumb - 1
console.log(questionsNumb)
story = story + c


console.log(story)