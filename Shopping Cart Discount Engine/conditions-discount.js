const cartTotal = Number(prompt("Enter cart total:"));
const isMember = prompt("Are you a member? (yes/no)");

let finalPrice;

if (isMember === "yes" && cartTotal >= 200) {
    finalPrice = cartTotal * 0.80;
}

else if (isMember === "yes" && cartTotal < 200) {
    finalPrice = cartTotal * 0.90;
}

else if (isMember === "no" && cartTotal >= 200) {
    finalPrice = cartTotal * 0.95;
}


else {
    finalPrice = cartTotal;

    console.log("No discount applied");
}

console.log(`Final price: $${finalPrice.toFixed(2)}`);