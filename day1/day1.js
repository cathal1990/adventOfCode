const { readFileSync } = require("fs");

const contents = readFileSync("input.txt", "utf-8").split("\n");

let currentElfCalories = 0;
let highest = 0;
let allTotals = [];

for (let i = 0; i < contents.length; i++) {
    if (contents[i] === "") {
        currentElfCalories > highest ? (highest = currentElfCalories) : null;
        allTotals.push(currentElfCalories);
        currentElfCalories = 0;
    }

    currentElfCalories += Number(contents[i]);
}

allTotals.sort((a, b) => b - a);
console.log(allTotals[0] + allTotals[1] + allTotals[2]);
