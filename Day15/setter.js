class Diary{
    constructor(filmName,rating){
        this.filmName=[]
        this.rating=[]
    }
    set setNewFilm(filmName){
        this.filmName.push(filmName)
    }
    set setNewRating(rating){
         this.rating.push(rating)
    }
}
const march23rd=new Diary()
march23rd.setNewFilm='Oppenheimer'
march23rd.setNewRating=8.5
// console.log(march23rd)

class List{
    constructor(listName,listDescription){
        this.listName=listName
        this.listDescription=listDescription
        this.filmsAdded=[]
        this.listComments=' '
    }
    set setFilmsAdded(filmsAdded){
        this.filmsAdded.push(filmsAdded)
    }
}
const addedOne=new List()
addedOne.listName='---The best of---'
addedOne.listDescription='This list conatain the best of action films'
addedOne.filmsAdded="'John wick chapter4','The Raid Redemption'"
addedOne.listComments='This list will be helpful while  youre searching for good action films'
console.log(addedOne.listName)
console.log(addedOne.listDescription)