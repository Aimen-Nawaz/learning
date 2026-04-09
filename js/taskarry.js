//task 1 
const orders = [
  { id: 1, customer: "Ali", total: 1200 },
  { id: 2, customer: "Ahmed", total: 800 },
  { id: 3, customer: "Sara", total: 1500 }
];


orders.forEach((order) => {
  console.log(`Task 1, Order ${order.id}: ${order.customer} - Rs.${order.total}`);

  order.processed = true;

  if (order.total > 1000) {
    console.log(order);
  }
});
//task 2
const users = [
  { firstName: "Ali", lastName: "Khan", active: true },
  { firstName: "Sara", lastName: "Ali", active: false }
];

const formattedUsers = users.map(user => ({
  fullName: user.firstName + " " + user.lastName,
  isActive: user.active
}));

console.log("\n Task2", formattedUsers);

const names = users.map(user => user.firstName + " " + user.lastName);
console.log(names);
//task 3
const products = [
  { name: "Laptop", tags: ["electronics", "office"] },
  { name: "Phone", tags: ["electronics", "mobile"] }
];

const allTags = products.flatMap(p => p.tags);
console.log("\n Task 3", allTags);
const uniqueTags = [...new Set(allTags)];
console.log(uniqueTags);
//task 4

//task 5
const expenses = [
  { title: "Food", amount: 500 },
  { title: "Travel", amount: 1500 },
  { title: "Shopping", amount: 2000 }
];

const total = expenses.reduce((sum, item) => sum + item.amount, 0);
console.log("\n Task 5", "Total:", total);
const highest = expenses.reduce((max, item) => {
  return item.amount > max.amount ? item : max;
});
console.log("Highest:", highest);

const grouped = expenses.reduce((sum, item) => {
  sum[item.title] = item.amount;
  return sum;
}, {});

console.log(grouped);
//task6
const messages = [
  "Hi",
  "How are you?",
  "Let's meet tomorrow"
];

const reversedText = messages.reduceRight((sum, msg) => sum + " " + msg);
console.log("\n task 6 ", reversedText);

const lastMessage = messages.reduceRight((prev, msg, i, arr) => arr.indexOf(prev) > i ? prev : msg);
console.log("Last:", lastMessage);
//task 7

const passwords = ["abc12", "pass@123", "secure99"];
const validLength = passwords.every(p => p.length > 6);
console.log("\n task 7", "All length > 6:", validLength);
const hasNumber = passwords.every(p => /\d/.test(p));
console.log("All contain number:", hasNumber);
//task 8
const roles = ["user", "editor", "admin"];
const isAdmin = roles.some(r => r === "admin");
console.log("\n task 8", "Is Admin:", isAdmin);
const hasModerator = roles.some(r => r === "moderator");
console.log("Has Moderator:", hasModerator);
//task 10
const str = "Hello";
let arr = Array.from(str);
console.log("\n task 9", arr);
const nums = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(nums);
const randomNums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
console.log(randomNums);
// task 11
const items = ["apple", "banana", "mango"];

for (let index of items.keys()) {
  console.log("\n Task 11", index);
}

items.forEach((item, index) => {
  console.log(index, item);
});
//task 12 

const colors = ["red", "green", "blue"];

for (const [index, value] of colors.entries()) {
  console.log("\n Task 12", index + " - " + value);
}
//task 13
const cart1 = ["item1", "item2"];
const cart2 = ["item3", "item4"];

const mergedCart = [...cart1, ...cart2];

const clonedCart = [...cart1];
const updatedCart = [...cart1, "item5"];

console.log("\n tassk 13", "Merged Cart:", mergedCart);
console.log("Cloned Cart:", clonedCart);
console.log("Updated Cart:", updatedCart);
console.log("Original Cart1:", cart1); 