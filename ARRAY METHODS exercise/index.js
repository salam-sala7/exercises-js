let students = ["Dania", "Omar", "Lina", "Rami"];
console.log("Initial:", students);

students.push("Sara");
console.log("After push:", students);

students.unshift("Adam");
console.log("After unshift:", students);

students[students.indexOf("Lina")] = "Lamar";
console.log("After replace:", students);

let removedLast = students.pop();
console.log("Removed last:", removedLast);
console.log("After pop:", students);

let removedFirst = students.shift();
console.log("Removed first:", removedFirst);
console.log("After shift:", students);

let hasRami = students.includes("Rami");
console.log("Has Rami:", hasRami);

let omarIndex = students.indexOf("Omar");
console.log("Omar index:", omarIndex);

let groupA = students.slice(0, 2);
console.log("Group A:", groupA);

let groupB = ["Nour", "Tala"];
console.log("Group B:", groupB);

let allGroups = groupA.concat(groupB);
console.log("All Groups:", allGroups);

let groupString = allGroups.join(" | ");
console.log("Group String:", groupString);

students.sort();
console.log("After sort:", students);

students.reverse();
console.log("After reverse:", students);

let seats = [1, 2, 3, 4, 5];
console.log("Original seats:", seats);

let reservedSeats = [...seats];
reservedSeats.splice(1, 3, "Reserved", "Reserved", "Reserved");
console.log("Reserved seats:", reservedSeats);

let studentsString = students.join(", ");
console.log("Students String:", studentsString);

console.log("=*=*= FINAL OUTPUT =*=*=");
console.log("students:", students);
console.log("removedLast:", removedLast);
console.log("removedFirst:", removedFirst);
console.log("hasRami:", hasRami);
console.log("omarIndex:", omarIndex);
console.log("groupA:", groupA);
console.log("allGroups:", allGroups);
console.log("groupString:", groupString);
console.log("reservedSeats:", reservedSeats);
console.log("studentsString:", studentsString);