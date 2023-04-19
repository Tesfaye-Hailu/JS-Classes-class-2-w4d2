//Class 2 assignment

//1.Create a class called Animal that has a name property and a speak method. 
//Then, create a class called Dog that extends Animal and
// has an additional breed property and a bark method.

class Animal {
   constructor (name){
        this.name = name;
   }

   speak() {
    
   }
}

class Dog extends Animal{
    constructor (name, breed) {
        super(name);
        this.breed = breed;
               
    }
    bark(){
        console.log("my dog is barking")
    }
   
}
 let Dog1 = new Dog("abc"," ZXT")
 let Dog2 = new Dog("abc"," ZXT")
 let Dog3 = new Dog("abc"," ZXT")

 Dog2.bark()
  
    //2.Create a class called Shape that has a name property and a calculateArea method.
    // Then, create a class called Circle that extends Shape and has an additional radius 
    //property and overrides the calculateArea method to calculate the area of a circle.

    class Shape {
        constructor (name){
            this.name = name;
        }
        calculateArea (){

        }
    }

    class circle extends shape (){
        constructor (name,radius) {
            super(name);
            this.radius = radius;
           }
         calculateArea(){
            this.calculateArea
         }   
    }


    //3.Create a class called Vehicle that has a make and model property and a drive method.
    //Then, create a class called Car that extends Vehicle and has an additional 
    //numWheels property and a honk method.

    class Vehicle (){
        construcor (make,model){
            this.make = make;
            this.model = model;
        }
        drive (){

        }
    }

    class car extends vehicle (){
        constructor (make,model,numWheels){
            super (make,model);
            this.numWheels = numWheels;
        }
        honk () {
            
        }
    }


    //4.Create a class called Person that has a name and age property and a greet method.
    //Then, create a class called Student that extends Person and has an additional major 
    //property and overrides the greet method to include their major.

    class Person (){
        constructor (name,age) {
            this.name = name;
            this.age = age;
            
        }
        greet () {

        }
    }

    class student extends person(){
        constructor (name,age,major){
            super (name,age);
            this.major = major;
        }
    }