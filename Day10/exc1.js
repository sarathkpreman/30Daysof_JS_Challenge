const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const emptySet=new Set()
// console.log(emptySet)

// 2.
const zeroToten=new Set()
for(let i=0; i<=10; i++){
    zeroToten.add(i)
}
// console.log(zeroToten)

// 3. 
const counrty=new Set(countries)
// console.log(counrty.delete('Finland'))
// console.log(counrty)

// 4.
zeroToten.clear()
// console.log(zeroToten)

const fiveEelements=['I','am','Sarath','from','India']
const fiveSet=new Set(fiveEelements)
// console.log(fiveSet)


const coumtryMap="'India','USA','UK','Russia','Korea'"
// const delimiter=","
// const splitArray=coumtryMap.map((element)=>element.split(delimiter))
console.log(coumtryMap.split())
let mapOfcountriesandnumbers=new Map()


const aUnionb=[...a, ...b]
console.log(aUnionb)
