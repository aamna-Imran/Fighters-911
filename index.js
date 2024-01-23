import inquirer from "inquirer";
import chalk from "chalk";
class player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        this.health = 100;
    }
}
class enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
let player1 = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter Your Name Man ",
});
console.log(chalk.bold.yellow(`   Welcome ${player1.name} !`));
let choose = await inquirer.prompt({
    type: "list",
    name: "enemy",
    message: "Select Your Fav Enemy",
    choices: ["Sea Monster", "Dracula", "Alien"],
});
console.log(chalk.bold.green(player1.name) + "  VS  " + chalk.bold.redBright(choose.enemy));
let p1 = new player(player1.name);
let e1 = new enemy(choose.enemy);
do {
    // For Sea Monster
    if (choose.enemy == "Sea Monster") {
        let select = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Action",
            choices: ["Attack", "Revive", "Run away for life"],
        });
        if (select.option == "Attack") {
            let weapon = await inquirer.prompt({
                type: "list",
                name: "select",
                message: "Select Weapon",
                choices: ["Assault Rifle", "Grenade", "Laser Beam"],
            });
            let num = Math.floor(Math.random() * 2); // Khiladi No.1
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${player1.name} Health is ${p1.health}`));
                console.log(chalk.bold.green(`${choose.enemy} Health is ${e1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.red(`YOU ARE ELIMINATED !`));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.healthDecrease();
                console.log(chalk.bold.green(`${player1.name} Health is ${p1.health}`));
                console.log(chalk.bold.red(`${choose.enemy} Health is ${e1.health}`));
                if (e1.health <= 0) {
                    console.log(chalk.bold.italic.magenta(`\n YOU WON !`));
                    process.exit();
                }
            }
        }
        if (select.option == "Revive") {
            let revive = await inquirer.prompt({
                type: "list",
                name: "select",
                message: "Select health care",
                choices: ["First Aid", "Drink Potion", "Pain Killers"],
            });
            if (revive.select == "First Aid") {
                p1.healthIncrease();
                console.log(chalk.bold.yellow(`Your health is ${p1.health}`));
            }
            if (revive.select == "Drink Potion") {
                console.log(chalk.bold.yellow(`your Health is ${(p1.health = 50)}`));
            }
            if (revive.select == "Pain Killers") {
                console.log(chalk.bold.yellow(`your Health is ${(p1.health = p1.health + 25)}`));
            }
        }
        if (select.option == "Run away for life") {
            console.log(chalk.bold.red(`YOU ARE ELIMINATED !`));
        }
    }
    // For Dracula
    if (choose.enemy == "Dracula") {
        let select = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Action",
            choices: ["Attack", "Revive", "Run away for life"],
        });
        if (select.option == "Attack") {
            let weapon = await inquirer.prompt({
                type: "list",
                name: "select",
                message: "Select Weapon",
                choices: ["Assault Rifle", "Grenade", "Laser Beam"],
            });
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${player1.name} Health is ${p1.health}`));
                console.log(chalk.bold.green(`${choose.enemy} Health is ${e1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.red(`YOU ARE ELIMINATED !`));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.healthDecrease();
                console.log(chalk.bold.green(`${player1.name} Health is ${p1.health}`));
                console.log(chalk.bold.red(`${choose.enemy} Health is ${e1.health}`));
                if (e1.health <= 0) {
                    console.log(chalk.bold.italic.magenta(`YOU WON !`));
                    process.exit();
                }
            }
        }
        if (select.option == "Revive") {
            let revive = await inquirer.prompt({
                type: "list",
                name: "select",
                message: "Select health care",
                choices: ["First Aid", "Drink Potion", "Pain Killers"],
            });
            if (revive.select == "First Aid") {
                p1.healthIncrease();
                console.log(chalk.bold.yellow(`Your health is ${p1.health}`));
            }
            if (revive.select == "Drink Potion") {
                console.log(chalk.bold.yellow(`your Health is ${(p1.health = 50)}`));
            }
            if (revive.select == "Pain Killers") {
                console.log(chalk.bold.yellow(`your Health is ${(p1.health = p1.health + 25)}`));
            }
        }
        if (select.option == "Run away for life") {
            console.log(chalk.bold.red(`YOU ARE ELIMINATED !`));
        }
    }
    // For Alien
    if (choose.enemy == "Alien") {
        let select = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select Action",
            choices: ["Attack", "Revive", "Run away for life"],
        });
        if (select.option == "Attack") {
            let weapon = await inquirer.prompt({
                type: "list",
                name: "select",
                message: "Select Weapon",
                choices: ["Assault Rifle", "Grenade", "Laser Beam"],
            });
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${player1.name} Health is ${p1.health}`));
                console.log(chalk.bold.green(`${choose.enemy} Health is ${e1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.red(`YOU ARE ELIMINATED !`));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.healthDecrease();
                console.log(chalk.bold.green(`${player1.name} Health is ${p1.health}`));
                console.log(chalk.bold.red(`${choose.enemy} Health is ${e1.health}`));
                if (e1.health <= 0) {
                    console.log(chalk.bold.italic.magenta(`YOU WON !`));
                    process.exit();
                }
            }
        }
        if (select.option == "Revive") {
            let revive = await inquirer.prompt({
                type: "list",
                name: "select",
                message: "Select health care",
                choices: ["First Aid", "Drink Potion", "Pain Killers"],
            });
            if (revive.select == "First Aid") {
                p1.healthIncrease();
                console.log(chalk.bold.yellow(`Your health is ${p1.health}`));
            }
            if (revive.select == "Drink Potion") {
                console.log(chalk.bold.yellow(`your Health is ${(p1.health = 50)}`));
            }
            if (revive.select == "Pain Killers") {
                console.log(chalk.bold.yellow(`your Health is ${(p1.health = p1.health + 25)}`));
            }
        }
        if (select.option == "Run away for life") {
            console.log(chalk.bold.red(`YOU ARE ELIMINATED !`));
        }
    }
} while (true);
