//Syntax
// `String literal text`
// `String literal text ${expression}`

console.log('The sum of 2 and 3 is 5')
let a=2
let b=3
console.log(`The sum of ${a} and ${b} is ${a+b}`)

let firstName='Sarath'
let secondName='KP'
let country='India'
let city='Malappuram'
let language='JavaScript'
let job='Engineer'
let age=23
let fullName=firstName+' '+secondName

let personInfotwo=`I am ${fullName}. Iam ${age}. I live in ${country}.`
let personInfothree=`I am ${fullName}. I live in ${city},${country}. I am a ${job}, I learn ${language}`
console.log(personInfotwo)
console.log(personInfothree)