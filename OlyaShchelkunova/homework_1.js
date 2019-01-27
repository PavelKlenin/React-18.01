//Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) 
//и будет в цикле (times раз), вызывать функцию callback.

function loop(times = 0, callback = null) {
	if (typeof callback != 'function') {
		console.log('not a function');
		return false;
	}
	for (let i = 0; i < times; i++) {
		callback();
	}
	return true;
}

function someFunc () {
	console.log('someFunc!');
	return true;
}

loop( 3 , someFunc);
loop( 5 , 'someFunc');

//Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади

function calculateArea(figure, a, h, b) {
	let area;
	let [ , ...input] = arguments;

	switch (figure) {
		case 'triangle':
		area = a * h / 2;
	break;
		case 'square':
		area = a * a;
	break;
      case 'rectangle':
		area = a * b;
	break;
      case 'parallelogram':
		area = a * h;
	break;
      case 'rhombus':
		area = a * h;
	break;
	}

	let result = {figure, area, input};
	return result;
}

console.log(calculateArea('triangle', 5, 3));
console.log(calculateArea('rectangle', 6, 0, 2));
console.log(calculateArea('square', 2));

//Необходимо написать иерархию классов

class Human {
	constructor(name, age, dateOfBirth) {
		this.name = (typeof name == 'string')? name: 'error';
		this.age = (typeof age == 'number')? age: 'error'; 
		this.dateOfBirth = (typeof dateOfBirth == 'string')? dateOfBirth: 'error';
	}
	displayInfo() {
		return this.name + ' ' + this.age + ' ' + this.dateOfBirth;
	}
}

class Employee extends Human {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth);
		this.salary = (typeof salary == 'number')? salary: 'error';
		this.department = (typeof department == 'string')? department: 'error';
	}
	displayInfo() {
		return super.displayInfo() + ' ' + this.salary + ' ' + this.department;
	}
}

class Manager extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.list = [];
	}
	addDeveloper(developer) {
		this.list.push(developer);
		developer.manager = this.name;
	}
	deleteDeveloper(developer) {
		this.list.splice(this.list.indexOf(developer),1); 
		developer.manager='';
	}
}

class Developer extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.manager = '';
	}
	changeManager(manager) {
		this.manager = manager.name;
	}
}

let human = new Human('Olga', 29, '09.04.1989');
let employee = new Employee('Kat', 25, '01.01.1993', 400, 'depart_1');

console.log(employee.displayInfo());

let manager1 = new Manager('One', 11, '11.11.11', 100, 'depart_1');
let manager2 = new Manager('Two', 22, '22.22.22', 200, 'depart_2');

console.log(manager1.displayInfo());
console.log(manager2.displayInfo());

let developer0 = new Developer('Zero_dev', 0, '0.0.0', 0, 'depart_0');
let developer1 = new Developer('One_dev', 1, '1.1.1', 1, 'depart_1');
let developer2 = new Developer('Two_dev', 2, '2.2.2', 2, 'depart_2');

console.log(developer0.displayInfo());
console.log(developer1.displayInfo());
console.log(developer2.displayInfo());

manager1.addDeveloper(developer0);
manager1.addDeveloper(developer1);
manager1.addDeveloper(developer2);
manager1.deleteDeveloper(developer1);

console.log(manager1.list);
console.log(developer0.manager);
console.log(developer1.manager);

developer1.changeManager(manager2);
console.log(developer1.manager);