#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.magentaBright.bold("\n \t Welcome To Project with Ammar - Todo-List Application\n"));
// Use Arrow Function Method
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
// Function to add new task to the list
//Again Use Arrow Function Method
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task",
        }
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
//Function to view all Todo-List tasks
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//Function to delete a task from list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        }
    ]);
    let deletedTask = todos.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} This task has been deleted successfully from your Todo-List\n`);
};
//Function to Update a Task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter a new task name :"
        }
    ]);
    todos[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} Updated Sucessfully [For Updated List Check Option: "View Todo-List"] `);
};

main();
