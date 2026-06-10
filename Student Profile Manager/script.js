let student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  grades: [88, 92, 79],
  isEnrolled: true
};

student.email = "student@example.com";

student.age = 21;
student.isEnrolled = false;

delete student.lastName;

console.log(student.firstName);
console.log(student["email"]);

for (let key in student) {
  console.log(key + ": " + student[key]);
}

const { firstName, email } = student;

console.log(firstName);
console.log(email);

const contact = {
  ["phone_" + firstName]: "055-123-4567"
};

console.log(contact);

const address = {
  street: "Main St",
  city: "Hebron",
  zip: "12345"
};

const fullStudent = {
  ...student,
  ...address
};

console.log(fullStudent);