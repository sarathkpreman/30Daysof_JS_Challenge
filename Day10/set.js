// set is a collection of elements. set can only contain unique elements
// creating an empty set
// const companies=new Set()
// console.log(companies)

// creating set from array
const languages=[
    'English',
    'Finnish',
    'French',
    'Spanish',
    'Hindi'
]
const setOfLanguages=new Set(languages)
// console.log(setOfLanguages)
// set is iteratable object and we can iterate through each elements
// for(const language of setOfLanguages){
//     console.log(language)
// }

// adding an element to a set
// console.log(companies.size)
// companies.add('Google')
// companies.add('Microsoft')
// companies.add('Amazon')
// console.log(companies)
const companies=['Google','Facebook','Amazon','Oracle','Microsoft']
setOfCompanies =new Set()
for(const company of companies){
    setOfCompanies.add(company)
}
// console.log(setOfCompanies)

// const newSet=new Set()
// newSet.add(10)
// newSet.add('Hello')
// newSet.add('book')
// for(let key of newSet){
//     console.log(newSet)
// }

const love=['lord','shiva','love']
const parvati=new Set(love)
for(const gouri of parvati){
    parvati.add('PARVATI')
}
// console.log(parvati)

// deleting an element of a set
parvati.delete('PARVATI')
// console.log(parvati)

// checking an element in a set
// console.log(parvati.has('PARVATI'))
// console.log(parvati.add('parvati'))


// clearing the set, it remove all the elements from the set
setOfLanguages.clear()
// console.log(setOfLanguages)

const Array=[20]
// console.log(typeof(Array))

const ob={
    name: 'Sarath',
    country: 'India',
    job: 'Engineer'
}
// console.log(typeof(ob))

const newLanguages=[
    'English',
    'Finnish',
    'Engish',
    'French',
    'Spanish',
    'English',
    'French'
]
// const langSet=new Set(newLanguages)
// console.log(langSet)
// console.log(langSet.size)

// const counts=[]
// const count={}

// for(const I of langSet){
//     const filteredLang=newLanguages.filter(lng)=>lng===I)
// }

const langSet = new Set(languages)
// console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
// console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
//   console.log(filteredLang) // ["English", "English", "English"]
//   counts.push({ lang: l, count: filteredLang.length })
}
// console.log(counts)

// union sets
const setOne=[1,2,3,4,5]
const setTwo=[3,4,5,6,7]
const setThree=[...setOne, ...setTwo]

// let a=new Set(setOne)
// let b=new Set(setTwo)
// let c=new Set(setThree)

// console.log(c)

let componentsOne=['gpu','cpu','screen','keyboard','mouse']
let componentsTwo=['mic','speaker','browser','laptop','camera']
let fullComponents=[...componentsOne, ...componentsTwo]

const compOne=new Set(componentsOne)
const compTwo=new Set(componentsTwo)
const compThree=new Set(fullComponents)

// console.log(compThree)

// intersection of two sets
let interOne=[5,62,3,7,9]
let interTwo=[5,7,3,60,1]

const iOne=new Set(interOne)
const iTwo=new Set(interTwo)

let iThree=interOne.filter((num)=>iTwo.has(num))
let Ithree=new Set(iThree)

// console.log(Ithree)

// difference of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

// console.log(C)

