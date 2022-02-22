const students = {
	fullName: 'Abcd', age: 34, location: 'dhaka', 
	skills: {
		play1: 'football', play2: 'cricket', play3: 'badminton',
		tech: {
			web : 'html', server : 'php'
		}
	}
}
/* if you want to create the variable with object property and assign to property value in the variable. So flow this pattern  */
const { web, server } = students.skills.tech;
console.log(web, server);

console.log(students.skills.play1);
console.log(students.fullName);
console.log(students.skills.tech.web);
// make variable by the objects property value 
const persone = {
	fullName: 'kabir sing', age: 34, phone: 'samsung', mobileNumbers: 01744457557 
}
/* if you want to create the variable with object property and assign to property value in the variable. So fllow this pattern  */
const { fullName, age, phone, mobileNumbers } = persone;
console.log(fullName);
console.log(age);
console.log(phone);
console.log(mobileNumbers);
console.log(phone);