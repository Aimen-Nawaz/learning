//Task11
let numberr = 5;
for (let i = 1; i <= 10; i++) {
    console.log(numberr + "X" + i + "=" + (numberr * i));
}
//Task 12

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}
//Task 13
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
//Task 14
let p1 = 670;
let p2 = 800;
let p3 = 567;
let totalPrice = p1 + p2 + p3;
console.log("totalPrice=" + totalPrice);
let text = (totalPrice > 2000) ? "free delivery" : "charges apply"
console.log(text)
//Task 15
let balance = 40000;
let withDrawAmount = 1000;
if (withDrawAmount <= 40000) {
    console.log("Transcation Successfull");

}
else {
    console.log("Insuffficient Balance");
}