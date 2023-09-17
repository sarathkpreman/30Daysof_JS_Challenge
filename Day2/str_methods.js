let name='sarath';
console.log(name.length); //6

let country='India'
let mission=country[0];
console.log(mission);//I

let moon='India'
console.log(moon[3]);//i

let csk='Dhoni'
console.log(csk.toUpperCase()); //Uppercase

let captain='MSD'
console.log(captain.toLowerCase());

//5.substr(): It takes two arguments, the starting index and number of characters to slice.
let say='I was waiting for you'
console.log(say.substr(0,8))

//6.substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
let word='But it is impossible to forget you my lady'
console.log(word.substring(0,8))

//7.split(): The split method splits a string at a specified place.
let shiva='sati & Parvati'
console.log(shiva.split(''))
console.log(shiva.split(' '))
console.log(shiva.split())
console.log(shiva.split(', '))
console.log(shiva.split(','))

//8.trim(): Removes trailing space in the beginning or the end of a string.
let js='         30 Days of js'
console.log(js)
console.log(js.trim(' '))

//9.includes(): It takes a substring argument and it checks if substring argument exists in the string. 
//includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
let love='shiva and sati first lovers of the universe'
console.log(love.includes('love'))

//10.replace(): takes as a parameter the old substring and a new substring.
let room='room 45'
console.log(room.replace('room 45','room 29'))

//11. Takes index and it returns the value at that index.
console.log(love.charAt(3)
)

//12. Takes index and return ASCII of that char position code
console.log(love.charCodeAt(3))

//13. Takes s substring and if thr substring exits in a string it returns the first position of the substring if does not exist it returns -1
console.log(shiva.indexOf('Parvati'))

//lastIndexOf()
console.log(word.lastIndexOf('lady'))

//15. It takes many strings and joins them
let me='Sarath'
let you='love'
let soul='You'
let time='always'
console.log(me.concat(" Loves"," You"))

//16. startsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring . it retruns boolean value
console.log(shiva.startsWith('sati'))

//17.endsWith()
console.log(shiva.endsWith('sati'))

//18.search returns the index value of the string position
console.log(shiva.search('Parvati'))

//19.match()
console.log(you.match('lo'),time.match('ways'))

//20.repeat()
console.log(shiva.repeat(5))