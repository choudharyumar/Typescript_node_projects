#! /usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk"
import chalk_animation from "chalk-animation";
import inquirer from "inquirer";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
};
async function WEL() {
    let welcome = chalk_animation.rainbow(" My calculator");
    await sleep();
    welcome.stop();
    console.log(`
        __________________
        |                |
        | ____________   |             
        | |___________|  |               
        |                |
        | 7  8  9    *   |            
        | 4  5  6    -   |            
        | 1  2  3    +   |
        | .  0  ^    /   |
        |________________|              
    `);
}
await WEL();
async function Working() {
    await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "enter the operation",
            choices: ["add", "sub", "mul", "div", "pow"]
        },
        {
            type: "number",
            name: "N1",
            message: "enter the 1st numbr",
        },
        {
            type: "number",
            name: "N2",
            message: "enter the 2nd numbr",
        }
    ])
        .then((answer) => {
        if (answer.operator == "add") {
            console.log(`${answer.N1}+${answer.N2}=${answer.N1 + answer.N2}`);
        }
        if (answer.operator == "sub") {
            console.log(`${answer.N1}-${answer.N2}=${answer.N1 - answer.N2}`);
        }
        if (answer.operator == "mul") {
            console.log(`${answer.N1}*${answer.N2}=${answer.N1 * answer.N2}`);
        }
        if (answer.operator == "div") {
            console.log(`${answer.N1}/${answer.N2}=${answer.N1 / answer.N2}`);
        }
        if (answer.operator == "pow") {
            console.log(`${answer.N1}**${answer.N2}=${answer.N1 ** answer.N2}`);
        }
    });
}
async function Again() {
    do {
        await Working();
        var again = await inquirer.prompt({
            type: "input",
            name: "IN",
            message: "Do you want more calculation? (Y  or N)",
        });
    } while (again.IN == "Y" || again.IN == "y" || again.IN == "YES" || again.IN == "Yes" || again.IN == "yes");
}
await Again();
