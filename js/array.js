// /*const arr =[4,"text", c={ x:1,y:2}, d=[0,1,3]]
// console.log(arr.flat())
// alert("the arr is", arr);*/
// let marks=[75,88,98,90];
// console.log(marks.length);//property
// console.log(marks[3])
// str="hello"//string immutable
// //looping over and array
// let heroe = ["ironman","doremon","srk","salaman","lajol"]
// for(let i=0; i<array.length; i++)


const arr = [1, 3, 3, 5, 7, 7, 8]

//const even = arr.find((num, i, arr) => {
    /*console.log(num)
    return num % 2 === 0

console.log(even)

const odd = arr.filter((num) => {
    return num % 2 === 0
})
console.log(odd)*/
const fruits = ["Banana", "Orange", "Apple", "Mango","kiwi", "strwaberry","Orange"];
//array methods

console.log(fruits);
//array tostring()

console.log(fruits.toString(3));
// at()// get an element in the idx
console.log(fruits.at(3))
//join()join element
console.log(fruits.join(" / "))

//pop and push
console.log(fruits.pop());
console.log(fruits.push("pineapple"));
//SHIFT REMOVE FIRST ELEMENT
console.log(fruits.shift());
//UNSHIFT add nem element in array at beginig
console.log(fruits.unshift("grapes"));
console.log(fruits)
const veg=["tomato", "ladyfinger","cababge","carrot"]
//concat method
console.log(fruits.concat(veg));
console.log(fruits.copyWithin(5,0))
const cell = [["samsunga26","samsunga12"],["iphone16","iphone17"],["infinix", "oppo"]]
//flat and flatmap function

console.log(cell.flat());
const celll = [1, 2, 3, 4, 5, 6];
const newArr = celll.flatMap(x => [x, x * 10]);
console.log(newArr);
//slice and splice function
console.log(veg.splice(0,1 ))//confusion
console.log(veg.slice(1,3))

console.log(veg)

// array search
// indexof
const devices=["loptop","hp","lenovo","dell","pc","dell","hp"]
let position= devices.indexOf("hp",+2);
console.log(position)
console.log(devices.lastIndexOf("dell"))//return last present word
console.log(devices.includes("bottel"))//check present or not
//array find
const numbers = [4, 0, 16, 25, 29,4,8,19,16];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)
//array sort
console.log(devices.sort())
console.log(devices.reverse())
console.log(devices.toSorted())//confusion
console.log(devices.toReversed())//confusion
console.log(numbers.sort(function(a, b){return a - b}));
console.log(numbers.sort(function(a, b){return b - a}));
//fisher yates method
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);
//str to arr
let str = "hello";
let arrStr = str.split('');
console.log(arrStr);
//joined array
let joined = arrStr.join('');
console.log(joined);
//flatten array
let nested = [1, [2, 3], [4, 5]];
let flat = nested.flat();
console.log(flat);
//sorting by arr
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort((a, b) => a.year - b.year);
console.log(cars);