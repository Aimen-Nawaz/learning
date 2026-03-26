//Task 16
let n1 = 600;
let n2 = 67;
let n3 = 700;
if (n1 < n3 && n2 < n3) {
    console.log("largest number = " + n3)


}
else if (n1 < n2  && n3 < n2) {
    console.log("largest number" + n2)
}
else if (n2 < n1 && n3 < n1) {
    console.log("largest number" + n1)
}else{
    console.log("invalid comparison")
}
//Task 17
const secret = 11;
let guess = [7, 9, 15, 11, 8]
let i = 0;

while (i < guess.length) {

    if (guess[i] === secret) {
        console.log("Matched  " + guess[i])
    }
    i++;

}
//Task 18
let balance = 5000;
let withdrwalAmount;
let isValid = false;


while (!isValid) {
       withdrwalAmount = Number(prompt("Enter amount to withdraw (Multiples of 500):"));

    if (withdrwalAmount > balance) {
        console.log("Error: Insufficient Balanc. Your balance is =" + balance);
    }
    else if (withdrwalAmount % 500 !== 0) {
        console.log("Error: Amount must b multiple of 500")
    }
    else if (withdrwalAmount <= 0 || isNaN(withdrwalAmount)) {
        console.log("Error: Please enter a valid postive number: ")
    }
    else {
        balance -= withdrwalAmount;
        console.log("SUccess: Reamining balance = " + balance);
        isValid = true;
    }
}
