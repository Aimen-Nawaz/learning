
const person = {
    name: "jaffer",
    greet: () => {
        return person.name;
    }
}

console.log(person.greet())
const result = test()

function test() {
    console.log("test");
}

console.log("RESULT", result);
//practice
//DEFINATION
function myFunction(T2) {
    console.log(T2)

}
// CALL
myFunction("I AM AIMEN");

// SUM 2 NUMBERS
function sum(a, b) {
    s = a + b;
    return s;


}
let val = sum(7, 9)
console.log(val);
// arrow function
const mul = (x, y) => {
    console.log(x * y)
}
mul(9, 8);
//count vowels
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;

        }

    }
    return count;
}
let vowles = countVowels("aimen");
console.log(vowles);
//with arrow function
const countV = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;

        }

    }
    return count;
}

let vow = countV("aimenkhan");
console.log(vow);

