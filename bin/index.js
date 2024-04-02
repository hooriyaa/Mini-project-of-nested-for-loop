#! /usr/bin/env node
import inquirer from "inquirer";
let a = "";
let input = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Please enter your first number:"
    }]);
const total = input.num1;
for (let i = 1; i <= total; i++) {
    for (let j = 1; j <= i; j++) {
        a += "*";
    }
    ;
    a += "\n";
}
console.log(a);
