//Class 2 assignment

//1.Create a class called Animal that has a name property and a speak method. 
//Then, create a class called Dog that extends Animal and
// has an additional breed property and a bark method.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

const dog1 = new Dog('Papi', 'Boxer');
const dog2 = new Dog('Tati', 'Australian Shepherd');
const dog3 = new Dog('Zozi', 'Great Dane');

console.log(dog1);
console.log(dog2);
console.log(dog3);

dog1.bark();
dog2.bark();
dog3.bark();


    //2.Create a class called Shape that has a name property and a calculateArea method.
    // Then, create a class called Circle that extends Shape and has an additional radius 
    //property and overrides the calculateArea method to calculate the area of a circle.

    class Shape {
      constructor(name) {
        this.name = name;
      }
    
      calculateArea() {
        
      }
    }
    
    class Circle extends Shape {
      constructor(radius) {
        super('Circle');
        this.radius = radius;
      }
    
      calculateArea() {
        const area = Math.PI * this.radius ** 2;
        console.log(`The area of ${this.name} with radius ${this.radius} is ${area.toFixed(2)}.`);
      }
    }

    //3.Create a class called Vehicle that has a make and model property and a drive method.
    //Then, create a class called Car that extends Vehicle and has an additional 
    //numWheels property and a honk method.

    class Vehicle {
      constructor(make, model) {
        this.make = make;
        this.model = model;
      }
    
      drive() {
        console.log(`Enjoying with driving the ${this.make} ${this.model}.`);
      }
    }
    
    class Car extends Vehicle {
      constructor(make, model, numWheels) {
        super(make, model);
        this.numWheels = numWheels;
      }
    
      honk() {
        console.log(`The ${this.make} ${this.model} alerting other drivers and pedestrians.`);
      }
    }
    
    const mercedesBus = new Car('Mercedes-Benz', 'Citaro', 6);
    const winnebagoRV = new Car('Winnebago', 'View', 6);
    const johnDeereTruck = new Car('John Deere', '6120M', 4);
    
    console.log(mercedesBus);
    console.log(winnebagoRV);
    console.log(johnDeereTruck);

    //4.Create a class called Person that has a name and age property and a greet method.
    //Then, create a class called Student that extends Person and has an additional major 
    //property and overrides the greet method to include their major.

    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    
      greet() {
        console.log(`Hello, my name is ${this.name}. Nice to meet you`);
      }
    }
    
    class Student extends Person {
      constructor(name, age, major) {
        super(name, age);
        this.major = major;
      }
    
      study() {
        console.log(`I am studying ${this.major}.`);
      }
    }
    
    const malia = new Person('Malia', 23);
    malia.greet();
    
    const shasha = new Student('Shasha', 20, 'Computer Science');
    shasha.greet();
    shasha.study();



   // Part II


//1.Create a factory class called "School" that creates and adds objects from the "Course" class.

class Course {
  constructor(name, teacher) {
    this.name = name;
    this.teacher = teacher;
  }

  info() {
    console.log(`Course: ${this.name}, Teacher: ${this.teacher}`);
  }
}

class School {
  constructor() {
    this.courses = [];
  }

  addCourse(name, teacher) {
    const course = new Course(name, teacher);
    this.courses.push(course);
    return course;
  }
}

const perScholas = new School();

const javaScript = perScholas.addCourse('Java Script', 'Mr. Chase');
javaScript.info();

const pd = perScholas.addCourse('PD', 'Mr. Patrick');
pd.info();

//2. Create a factory class called "Portfolio" that creates and adds objects from the "Project" class.

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  info() {
    console.log(`Project: ${this.name}, Description: ${this.description}`);
  }
}

class Portfolio {
  constructor() {
    this.projects = [];
  }

  addProject(name, description) {
    const project = new Project(name, description);
    this.projects.push(project);
    return project;
  }
}

const myPortfolio = new Portfolio();

const project1 = myPortfolio.addProject('Website', 'Receipe website');
project1.info();

const project2 = myPortfolio.addProject('Game', 'card game');
project2.info();

//3.Create a factory class called "Company" that creates and adds objects from the "Employee" class.

class Employee {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

  info() {
    console.log(`Employee: ${this.name}, Title: ${this.title}`);
  }
}

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(name, title) {
    const employee = new Employee(name, title);
    this.employees.push(employee);
    return employee;
  }
}

const boeing = new Company();

const tesfaye = boeing.addEmployee('Tesfaye', 'Jr Software Engineer');
tesfaye.info();

const jhon = boeing.addEmployee('Jhon', 'Quality Manager');
jhon.info();