// syntax
// class ClassName{
    // code goes here
// }


// class Person{

// } class created

// class instantiation
// class Person{

// }
// const person=new Person()
// console.log(person)


// class constructor
// class Person{
//     constructor(firstName, lastName){
//         // console.log(this) //check the output
//         this.firstName=firstName
//         this.lastName=lastName
//     }
// }
// const person=new Person('Sarath','KP')
// // console.log(person)

// const person2 =new Person('Amal','Krishna')
// // console.log(person2)

class Cars{
    constructor(color,brand){
        this.brand=brand
        this.color=color
    }

}
const carOne=new Cars('Drakgrey','BMW')
const carTwo=new Cars('Red','Audi')
// console.log(carOne,carTwo)

class Student{
    constructor(name,dept,year){
        this.name=name;
        this.dept=dept;
        this.year=year;
    }
}
const studentOne=new Student('Sarath','CSE',4)
const studentTwo=new Student('Rahul','CSE',4)
// console.log(studentOne,studentTwo)

// class methods
// in a class we can create class methods , methods are js function inside the class
class newAdmission{
    constructor(fisrtName,lastName,age,city,mark){
        this.fisrtName=fisrtName
        this.lastName=lastName
        this.age=age
        this.city=city
        this.mark=mark
    }
    getFullName(){
        const fullName=this.fisrtName+' '+this.lastName
        return fullName
    }
    get getCity(){
        return this.city
    }
    get getMark(){
        return this.mark
    }
}
const admOne=new newAdmission('Sarath','KP',23,'Malappuram',85)
const admTwo=new newAdmission('Rahul','TR',23,'Kottayam',80)
// console.log(admTwo.getFullName(),admOne.getFullName())
// console.log(admTwo)


class Mobile{
    constructor(brand,model,color){
        this.brand=brand
        this.model=model
        this.color=color
        this.score=0
        this.issues=[]
    }
    set setScore(score){
        this.score+=score
    }
    set setIssues(issues){
        this.issues.push(issues)
    }
}

const brandOne=new Mobile('Xiaomi','11 Lite NE','Silver grey')
const brandTwo=new Mobile('Apple','15','Red')

// console.log(brandOne.model)
// console.log(brandTwo)

// console.log(brandOne.score)
// console.log(brandTwo.issues)

brandOne.setScore=8
brandOne.setIssues='Screen bleesh in outdoor'

brandTwo.setScore=6.9
brandTwo.setIssues='Over heating'

// getter method
// the getter method allow us to access value from the object
// keyword get

// console.log(admOne.getCity)
// console.log(admTwo.getMark)


// setter
// the setter method allow us to modify the value
// of an certain propertie,

console.log(brandOne.score)
console.log(brandTwo.issues)

