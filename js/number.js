//tostring
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();
console.log(x.toString(2))
//to exponentional
let X = 9.656;
X.toExponential(2);
X.toExponential(4);
X.toExponential(0)
console.log(X.toExponential(0))
//to fixed
let y = 9.656;
y.toFixed(0);
y.toFixed(2);
y.toFixed(3);
y.toFixed(6);
console.log(y.toFixed(0));
console.log(y.toFixed(2));
console.log(y.toFixed(3));

//biginit
let largeNumber = BigInt("12345678901234567890");
let num = Number(largeNumber);
console.log(num)