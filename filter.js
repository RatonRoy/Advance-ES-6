const numbers = [12, 21, 34, 45, 67, 89, 90, 100, 120, 150];
const bigNumbers = numbers.filter(number => number > 50);
const smallNumbers = numbers.filter(number => number < 50);
console.log(smallNumbers);
console.log(bigNumbers);
/* filter method return an array and must check a condition if the condition is valid then took the elements  */
const products = [
	{name : 'phone', location : 'Dhaka', color : 'black'},
	{name : 'water Bottle', location : 'Dhaka', color : 'black'},
	{name : 'laptop', location : 'Rangpure', color : 'white'},
	{name : 'desktop', location : 'Rangpure', color : 'red'},
	{name : 'Books', location : 'Nilphamari', color : 'red'},
	{name : 'note books', location : 'Nilphamari', color : 'white'}
]
const blackproducts = products.filter(product => product.color == 'black');
const redProducts = products.filter(product => product.color == 'red');
// const redProducts = products.product(product => product.color == 'red');
/* find method not return an array it returns just the elemenst  */
const singleProduct = products.find(product => product.name == 'laptop');
const singleProduct1 = products.find(product => product.location == 'Dhaka');

console.log(blackproducts);
console.log(redProducts);
console.log(singleProduct);
console.log(singleProduct1);
