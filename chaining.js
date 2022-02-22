// declere variable based on the object of the property 
const { fullName, age, phone } = { fullName: 'kabir sing', age: 23, phone: 'samsung' };
console.log(fullName, age, phone);
// declere variable based on the array 
const [first, second, third, four, five] = [12, 23, 32, 45, 56];
console.log(first, second, third, four, five); 
/* 
Conditional (Ternary) Operator 
variablename = (condition) ? value1:value2 
if the condition is true it assign  the value1 or if the value becomes false it assign value2;  
*/
let x = 12;
let y = x >= 18 ? 'able to give vote' : 'not able to vote';
console.log(y);

// for chain rules apply in the field 
const students = {
	fullName: 'Abcd', age: 34, location: 'dhaka', 
	skills: {
		play1: 'football', play2: 'cricket', play3: 'badminton',
		tech: {
			web : 'html', server : 'php'
		}
	}
}
console.log(students.fullName);
console.log(students.skills.play1);
// here i used the ternery operator for correction the value return the value undefine 
console.log(students.skills?.man?.play1);
