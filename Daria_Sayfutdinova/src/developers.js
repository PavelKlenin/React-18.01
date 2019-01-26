class Developer {
	constructor () {
		this.name = prompt ('Your name:'),
		this.age = prompt ('Your age:'),
		this.data = this.introduce()
	}
introduce () 
{console.log ("Hello " + this.name + ", " + this.age + " age!")}


}

let Dev = new Developer ();
console.log (Dev.data);