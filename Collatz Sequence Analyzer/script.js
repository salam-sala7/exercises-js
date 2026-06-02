let n = Number(prompt("Enter a positive integer"));
let steps = 0;
let highest = n;

console.log("Sequence:");

while (n !== 1) {

    console.log(n);

    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }

    if (n > highest) {
        highest = n;
    }

    steps++;
}

console.log(1);

console.log(`Reached 1 in ${steps} steps.`);
console.log(`Highest value reached: ${highest}`);