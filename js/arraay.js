const productsList = [
  { name: "Laptop", price: 100000, category: "electronics", stock: 5 },
  { name: "Shirt", price: 2000, category: "clothing", stock: 0 },
  { name: "Phone", price: 50000, category: "electronics", stock: 10 }
];
const allProducts = productsList.map(p => 
  `${p.name} - Rs.${p.price} (${p.category})`
);

console.log(allProducts);
const inStock = productsList.filter(p => p.stock > 0);
console.log(inStock);
const totalValue = productsList.reduce((sum, p) => 
  sum + (p.price * p.stock), 0
);

console.log("Total Value:", totalValue);
const hasOutOfStock = productsList.some(p => p.stock === 0);
console.log("Any out of stock?", hasOutOfStock);
const allAvailable = productsList.every(p => p.stock > 0);
console.log("All available?", allAvailable);
const updatedPrices = productsList.map(p => ({
  ...p,
  price: p.price * 1.1
}));

console.log(updatedPrices);