// creating an empty map
// const map=new Map()
// console.log(map)

const countries=[
    ['Finland','Helsinki'],
    ['Swesen','Stockholm'],
    ['Norway','Oslo']
]
const map=new Map(countries)
// console.log(map)

// adding values to the map
const countriesMap=new Map()
countriesMap.set('Finland','Helsinki') //Key : value
countriesMap.set('Sweden','Stockholm')
countriesMap.set('Norway','Oslo')
// console.log(countriesMap)

// getting values from map
// console.log(countriesMap.get('Finland')) //Key is using to get the value


// checking key in map
// if a key exists in a map using 'has' method. it returns true or false
// console.log(countriesMap.has('Norway'))

// getting all values from map using loop
// for(let i=0; i<countriesMap.size; i++){
//     console.log(countriesMap)
// }

// for(const country of countriesMap){
//     console.log(country)
// }
// for(let county of countriesMap){
//     console.log(countriesMap.get('Finland'))
// }

for(const counrty of countriesMap){
    console.log(counrty)
}

for (const [country, city] of countriesMap){
    console.log(country, city)
   }