// practicing ES6 content
// let
// const
// arrow function
// class

// let 
let x = 5;
    x = 35; //the value of let changes when new value assigns
console.log(x);

// const
const y = 25;
    // y=10; //the value of const remains same and never changes if we change the value it throws an error
console.log(y);

//arrow function
let practice=()=>{
    console.log("this is an arrow function, which is included in ES6");
}
practice();

// creating class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
var person = new Person ('usman', 26);
console.log(person.name);
console.log(person.age);


