//task4
const applications = [
  { company: "ntech", role: "Frontend Dev", status: "pending", date: "2025-10-15" },
  { company: "Utech", role: "Data Analyst", status: "accepted", date: "2025-10-20" },
  { company: "cybron", role: "JS Engineer", status: "rejected", date: "2025-10-10" },
  { company: "software", role: "Backend Dev", status: "pending", date: "2025-10-22" }
];

const getByStatus = (status) => applications.filter(app => app.status === status);
//console.log("Only Pending:", getByStatus("pending"));

const sortByDate = (data) => [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
//console.log("Sorted (Latest First):", sortByDate(applications));
const totalCount = applications.length;

//console.log("Total Applications:", totalCount);


//Task 5
let posts = [
  { user: "Aimen", content: "Love this weather!", likes: 45 },
  { user: "Huda", content: "Just finished a marathon!", likes: 210 },
  { user: "Kinza", content: "Coding is fun.", likes: 85 }
];

posts.unshift({ user: "Khani", content: "Just joined the platform!", likes: 10 });
let sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);

//console.log("All Posts (with new one at start):", posts);
let trendingPosts = sortedPosts.slice(0, 3);
//console.log("Top 3 Trending:", trendingPosts);
//Task 6

let products = [
  { name: "Laptop", stock: 10, price: 800 },
  { name: "Mouse", stock: 3, price: 25 },
  { name: "Keyboard", stock: 2, price: 50 },
  { name: "Monitor", stock: 12, price: 150 }
];


const lowStock = products.filter(item => item.stock < 5);
//console.log("Low Stock Items:", lowStock);

const updateStock = (productName, quantity) => {
  const item = products.find(p => p.name === productName);
  if (item) item.stock -= quantity;
};
updateStock("Laptop", 1);
//console.log("Updated Products:", products);
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

//console.log("Sorted by Price:", sortedByPrice);
 //task
 
let chatHistory = [
  { sender: "Aimen", message: "Hey!", time: "10:00 AM" },
  { sender: "khani", message: "Hello there", time: "10:01 AM" },
  { sender: "Huda", message: "How is the code going?", time: "10:02 AM" },
  { sender: "kiran", message: "Almost done!", time: "10:03 AM" },
  { sender: "shariq", message: "I'm stuck on a bug", time: "10:05 AM" },
  { sender: "junaid", message: "Need help?", time: "10:06 AM" }
];

const addMessage = (sender, message) => {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  chatHistory.push({ sender, message, time });
};
addMessage("kolsoom", "Just joined!");


const lastFive = chatHistory.slice(-5);
console.log("Recent Chat:", lastFive);
const findByUser = (name) => chatHistory.filter(m => m.sender === name);

console.log("\n Task 4 Total Applications:", totalCount,"\n Task 5 : Huda's Messages:", findByUser("Huda"));



