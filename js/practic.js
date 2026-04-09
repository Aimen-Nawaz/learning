/* for each loop => calls a function once for each element
 const arr=[1,2,3,4,5]
 arr.forEach((value,index,array)=>{
    function logics
 })*/

//map()=> creates new array by performing operation in every element of array
 /*const arr=[1,2,3,4,5]
 arr.map((value,index,array){
    return value *value
    })*/

    //filter()=> filter an array  with values that passes a test create new array
/*const arr=[1,,2,3,4,5]
aar.filter(greater than 5)*/

//reduce()=>reduce an array single value
/*const arr{1,2,3,4}
let sum = Number.reduce(add)*/

// Array.from=> used to create an array from any other object
/*const name={"helllo"}
Array.from("hello")*/

// for of loop using to get values from array
// for in is used for get the keys from array

//flat map()method first maps all elements of an array and then creates a new array by flattening the array.
//const myArr = [1, 2, 3, 4, 5, 6];
//const newArr = myArr.flatMap((x) => x * 2);

//The reduceRight() method runs a function on each array element to produce a single value
/*const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}*/

//The every() method checks if all array values pass a test.
/*const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}*/
//The some() method checks if some array values pass a test.
/*const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}*/