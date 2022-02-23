/* if you want to create a class use the class keyword after that it creat a class. In general case class  first letter start with uppercase. when a statement end give the semicolon it is the rules for js class . In the middle position of property and value use equal symbole. If you want to decelare a function inside a class don't use the function key word  only give the function name it is a valid thing for a class making. if you want to accese the property value dynamically Always add a method named constructor().constructor() method syntax like this constructor(name, location) {
	this.propertyName = name;
	this.propertyName = location;
}
	this keyword define the orginal class object.
*/
class Car {
	name; 
	model;
	age = 21; 
	constructor (name, model) {
		this.name = name;
		this.model = model;
	}
	startCar() {
		console.log(this.name, 'please start the car now');
	}
}
/* if you want to create a new class by using the privious class (it work like a ডাইস ) . Here toyotaCorolla is a new class and using the car class property. car parameters are constructor function parameter */
const toyotaCorolla = new Car("toyotaCorolla", 'old');
const ToyotaNoah = new Car("ToyotaNoah", 'new');
console.log(toyotaCorolla);
console.log(ToyotaNoah);
// call the function that remains inside the class 
toyotaCorolla.startCar();
ToyotaNoah.startCar();
