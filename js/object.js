const student={
    fullName:"Aimen khan",
     marks : 94.8,
    printMarks:function(){
    console.log("marks=" , this.marks);
}


}
student.printMarks();
//construtor
class Student {

    constructor(name, marks) {
        this.fullName = name;
        this.marks = marks;
    }

    
    printMarks() {
        console.log("marks =", this.marks);
    }
    studentName(){
    console.log("name=", this.fullName , "marks=",this.marks)
}
}

const student1 = new Student("Aimen Khan", 94.8);
const student2 = new Student("Zain Ahmed", 88.5);

student1.studentName();
student2.studentName(); 
/*Task
const person = {};

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person)*/

/*const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
namee=person.fullName
//get keyword
console.log(namee)*/
/*const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};
console.log(person.lang)*/
//set keyword
/*const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

person.lang = "english";
console.log(person.language)*/

// add a new property in object
/*const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person, "year", {value:"2008"});
console.log(person.year)*/

//Object.defineProperties(object, descriptors)
/*const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person, "language" , {value:"NO"});
console.log(person.language)*/