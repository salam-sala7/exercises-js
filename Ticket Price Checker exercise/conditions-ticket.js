const ageInput = prompt("Please enter your age:");
const age = Number(ageInput);1


if (age < 5) {
    console.log("$0");
}
else if (age >= 5 && age <= 17) {
    console.log("$10");
}
else if (age >= 18 && age <= 64) {
    console.log("$20");
}
else if (age >= 65) {
    console.log("$12");
}
