const cartItems = [
    { name: " moblie", price: 15000, quantity: 2 },
    { name: " bag", price: 500, quantity: 1 },
    { name: " pen", price: 27, quantity: 3 },
]

cartItems.push({ name: " fries", price: 100, quantity: 2 });//add
// console.log(cartItems)
let updatedCart = cartItems.filter(item => item.name !== "mobile");//remove
// console.log("newarr", updatedCart);

let total = cartItems.reduce((sum, item) => {
    return sum + Number(item.price) * Number(item.quantity);
}, 0);

// console.log(total);

//Task 2
const menu = [
    { name: "cocacola", price: 100, category: "drinks" },
    { name: " burger", price: 550, category: "fastfood" },
    { name: " pizza", price: 500, category: "fastfood" },
    { name: "Cake", price: 27, category: "Dessert" },
]
console.log(menu);

let search = menu.filter(item =>
    item.name.toLowerCase().includes("burger")
);

// console.log("search", search);
const findByName = (category) => {
    let find = menu.find(item => {
        const name = item.name.toLowerCase()
        return name.includes(category)
    }
    );
    return find//ONE OBJECT 
}
//console.log("Find by name", findByName("pizza"));
const findByPrice=(price)=>{
    return menu.filter(item=>{//EVERY ITEM IN ARRAY GIVE 
        return  item.price<500
    })
}
console.log("findByPrice",findByPrice(500) )