//task 1
const rawUser = "   Muhammad JAFFER   ";
const trimedUser = rawUser.trim();
console.log("task 1\n", "before trim ", rawUser.length, "\ntrimmed:", trimedUser, "\nafter trim", trimedUser.length);
console.log(trimedUser.toUpperCase());
console.log(trimedUser.toLowerCase())
//task2
const email = "jaffer@gmail.com";
const isValid = email.includes("@") && email.toLowerCase().endsWith("gmail.com");
if (isValid) {
    console.log("task2\n", "Email valid:", email);
} else {
    console.log("invalid email.");
}
//task 3
const password = "Pass@123";

const valid =
  password.length >= 8 &&
  (password.includes("1") || password.includes("2") || password.includes("3")) &&
  (password.includes("@") || password.includes("!"));

console.log("Password Valid:", valid);
//task 4
const products = ["Laptop", "Phone", "Tablet", "Smart Watch"];
const search = "phone";
const index = products.findIndex(product =>
    product.toLowerCase() === search.toLowerCase()
);
if (index !== -1) {
    console.log("task4\n", `Product "${products[index]}" found at index: ${index}`);
} else {
    console.log("Product not found.".includes("not") ? "No results found." : "");
}
//task 5
const fullName = "Muhammad Jaffer";
const firstName = fullName.slice(0, 8)
const lastName = fullName.substring(9, 15);
const maskedLastName = lastName[0] + "****";
const maskedFullName = firstName + " " + maskedLastName;

console.log("\ntask5", "First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Masked Name:", maskedFullName);
//TASK 6
const title = "Learn JavaScript in 30 Days";

const newTitle = title
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replaceAll(" ", "-");
console.log("\ntask 6", newTitle)
//task 7
const user = "Ali";
const message = "Hello!";
const mesg = user.concat(" says: ", message);
console.log(mesg)
//task 8
const paragraph = "JavaScript is easy to learn and powerful";
const words = paragraph.trim().split(" ");
const largeWord = words.reduce((prev, val) => prev.length < val.length ? val:prev)
console.log("task 8\n words count is :", words.length);
console.log("words array", words)
console.log("Largest word is", largeWord)
//task 9
const number = "3456789";
const formatted = `+92${number.padStart(10, '0')}`;
console.log("formatted", formatted)
const masked = formatted.slice(0, 5) + '***' + formatted.slice(-2);
console.log("task 9\n",masked); 
//task 10
const fileName = "document.pdf";

const extension = fileName.includes(".") ? fileName.slice(fileName.lastIndexOf(".") + 1) : "";

const isPDF = fileName.endsWith(".pdf");

const isValidd = fileName.includes(".");

console.log("task 10 \n","Extension:", extension);
console.log("Is PDF:", isPDF);
console.log("Valid File:", isValidd);
// task 11
const comment = "This product is stupid";
const hasBadWord = comment.includes("stupid");
const cleanComment = comment.replace("stupid", "***");
const isInappropriate = hasBadWord;
console.log("task 11 \n","Bad Word Found:", hasBadWord);
console.log("Clean Comment:", cleanComment);
console.log("Inappropriate:", isInappropriate);
// task 12
const personName = "Muhammad Jaffer";
const username = personName.toLowerCase().split(" ").join(".");
const parts = personName.toLowerCase().split(" ");
const shortUsername = parts[0].slice(0,1) + parts[1];

console.log("task12 \n","Username:", username);
console.log("Short Username:", shortUsername);
//task 13
const text = "Order #123 placed, Order #456 shipped";
const orders = text.match(/\d+/g);
const totalOrders = orders ? orders.length : 0;
const numbers = [...text.matchAll(/\d+/g)].map(item => Number(item[0]));
console.log("Orders :", orders);
console.log("Total Orders:", totalOrders);
console.log("Orders (numbers):", numbers);
//task 14
const symbol = "*";
console.log("task 14\n",symbol.repeat(4)); 
console.log(symbol.repeat(10)); 
const teext = "Hello ";
console.log(teext.repeat(3)); 
// task 15
const sentence = "javaScript is fun";
const lower = sentence.toLowerCase();
console.log("Lowercase:", lower);
const upper = sentence.toUpperCase();
console.log("Uppercase:",upper )

const capitalized = sentence
  .split(" ") 
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
  .join(" ")
  console.log("Capitalized",capitalized)

//task
const blog = "   Learn JavaScript FAST with stupid projects !";
const trimblog = blog.trim();
const urlSlug = blog.trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replaceAll(" ", "-");
console.log("\n Mini Project\n","trimblog");
console.log(urlSlug);

const wordCount = trimblog.split(" ").length;

const stopWords = ["with", "the", "a", "an", "is", "to", "and", "for"];

const keywords = trimblog
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(" ")
    .filter(word => !stopWords.includes(word));

const badWords = ["stupid", "bad"];

const maskedd = blog
    .trim()
    .split(" ")
    .map(word =>
        badWords.includes(word.toLowerCase())
            ? "****"
            : word
    )
    .join(" ");

console.log("Word Count:", wordCount);
console.log("Keywords:", keywords);
console.log(maskedd);
//task
const items = ["Apple", "Banana", "Cherry", "Date"];

const searchTerm = "aPpLe"; 
const results = items.filter(item => 
  item.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log("\ntask ",results)
//TASK
const passwordd = "MySecurePassword!";
const isLong = passwordd.length >= 8;
const hasSymbol = passwordd.includes("!");
if (isLong && hasSymbol) {
  console.log("last task\n","Valid Password");
} else {
  console.log(" Must be 8+ chars and include '!'");
}




