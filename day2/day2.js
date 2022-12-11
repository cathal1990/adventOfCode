const { readFileSync } = require("fs");

const contents = readFileSync("input.txt", "utf-8").split("\n");

let points = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
};

let result = 0;

// PART 1
for (let i = 0; i < contents.length; i++) {
    const opponent = contents[i][0];
    const player = contents[i][2];

    if (points[opponent] === points[player]) {
        result += points[player] + 3;
        continue;
    } else if (player === "X") {
        opponent === "B"
            ? (result += points[player])
            : (result += points[player] + 6);
    } else if (player === "Y") {
        opponent === "A"
            ? (result += points[player] + 6)
            : (result += points[player]);
    } else if (player === "Z") {
        opponent === "B"
            ? (result += points[player] + 6)
            : (result += points[player]);
    }
}

// PART 2
for (let i = 0; i < contents.length; i++) {
    const opponent = contents[i][0];
    const player = contents[i][2];

    if (player === "X") {
        if (opponent === "A") result += 3;
        if (opponent === "B") result += 1;
        if (opponent === "C") result += 2;
    } else if (player === "Y") {
        result += points[opponent] + 3;
    } else if (player === "Z") {
        if (opponent === "A") result += 8;
        if (opponent === "B") result += 9;
        if (opponent === "C") result += 7;
    }
}

console.log(result);
