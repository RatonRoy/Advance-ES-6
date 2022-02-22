const nums = [12, 13, 15, 20, 30];
// const outPut = [];
// create the functions to make a number double
/* function doubleIt(x) {
	return x * 2;
} */
// make double by arrow function 
const doubleIt = x => x * 2; 
// for of method for find a single value and push that value to the outPut array
/* 
for(const number of nums) {
	// outPut.push(number * 2);
	outPut.push(doubleIt(number));
}
console.log(outPut); */
// use the map method for creating this same array 
// const doubleNums = nums.map(x => x * 2);
const doubleNums = nums.map(doubleIt);
console.log(doubleNums);
