#!/user/bin/env node
import inquirer from "inquirer";
// 1  computer will generate a random number:
// 2 user input for gussing number:
// 3 compare user input with generative number and show result:
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answare = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-6:  ",
    },
]);
if (answare.userGuessNumber === randomNumber) {
    console.log("congratulation ! you a right number.");
}
else {
    console.log("you guess wrong number.");
}
