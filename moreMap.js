/*
map method 
1. if you want to reture an  array you must go to the  map method 
2. map go to the each element and do a certain work 
for each method is the same as the map method but map method give return a array but for each method not return a array it just do certine work as your inctraction 
*/
const products = [
	{name : "samsung", price: 12000, length : "s"},
	{name : "water bottle", price: 100, length : "L"},
	{name : "laptop", price: 500000, length : "XL"},
	{name : "Keybord", price: 1000, length : "XXL"},
	{name : "mouse", price: 500, length : "XXL"}
]
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
const productLength = products.map(product => product.length);
console.log(productName);
console.log(productPrice);
console.log(productLength);
