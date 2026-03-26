//Task 5
let marks = 55;
let grade;

if (marks >= 80) {
    grade = "A";
} else if (marks >= 60) {
    grade = "B";
} else if (marks >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log(grade);
//Task 6
let correctEmail = "aimen123@gmail.aimencom";
let correctPassword = "123456";
let enterEamil = "ain13458@gmail.com";
let enterPassword = "123456";

if (correctEmail === enterEamil && correctPassword === enterPassword) {
    console.log("login successful")
}
else {
    console.log("Invalide credentalis")
}
//Task 7
let dayNumber = 1; 2; 3; 4; 5; 6; 7;

for (let dayNumber = 1; dayNumber <= 7; dayNumber++) {
    switch (dayNumber) {

        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");

            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:

            console.log("sunday");
            break;
        default:
            console.log("inavild creditiles")
    }
}
//Task 8
let totalAmount = "880";
let text = (totalAmount > 1000) ? "Discount Applied" : "NO Discount";
console.log(text)
//Task 9
let numbers = 1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 14
for (let numbers = 1; numbers <= 10; numbers++) {
    console.log(numbers)
}
//Task10
let sum = 0
for (let number = 1; number <= 10; number++) {
    sum = sum + number;
}
console.log("sum is:" + sum);