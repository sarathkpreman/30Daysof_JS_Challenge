//Primitive datatypes are immutable, can not be modified once declared..
let word='javascript';
word='sarath'
word[0]='h'
// console.log(word)
let numOne = 9;
let numTwo = 9;
console.log(numOne==numTwo) //true
let js='javascript'
let py='python'
console.log(js==py)
let lightOn = false
let lightOff = false
console.log(lightOn==lightOff)

//Non primitive datatypes are modifiable or mutable
let num=[10,50,37,4,71,9]
console.log(num)
num[3]=100;
console.log(num)
console.log(num[4])

let arr1=[1,2,3]
let arr2=[1,2,3]
console.log(arr1==arr2) // Not possible to compare two non primitive datatypes values.

let userOne={
    name:'Sarath',
    country:'India',
    role: 'Engineer'
}
let userTwo ={
    name:'Sarath',
    country:'India',
    role: 'Engineer'
}
console.log(userOne==userTwo)

let num_1=[1,4,7]
let numbers=num_1
console.log(num_1==numbers)

let details={
    dept: 'cse',
    regno: '75'
}
let newDetails=details
console.log(details==newDetails)

//Math objects

//Random number generator
let randomNum=Math.random();
console.log(Math.floor(randomNum))

// String concat
let firstName='Sarath'
let secondName='KP'
let space=' '
let fullName=firstName+ space +secondName
console.log(fullName)

//long literal string
const paragraph='My name is Sarath, I live in India, Thrissur. \
I am a engineering final year student \
2024 passout batch'
console.log(paragraph)

//DESKTOP-DP6446A 3822