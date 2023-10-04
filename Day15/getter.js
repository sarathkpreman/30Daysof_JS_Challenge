// class newCinema{
//     constructor(filmName,directorName){
//         this.filmName=filmName
//         this.directorName=directorName
//         this.castList="'Leo','Tom','Cillian'"
//         this.rating=0
//     }
//     get getcastList(){
//         return this.castList
//     }
//     get getRating(){
//         return this.rating
//     }
// }
// const interstellar=new newCinema('Interstellar','Christopher Nolan')
// console.log(interstellar.getcastList)
// console.log(interstellar.getRating)
// console.log(interstellar)


class newUserCreation{
    constructor(userName,email,password){
        this.userName=userName
        this.email=email
        this.password=password
    }
}
const user1=new newUserCreation('autumn','autumn14@gmail.com','autumn14@')
console.log(user1.userName)
class loginAlreadyMember{
    constructor(userName,password){
        this.userName=userName
        this.password=password
    }
    get getOldMembers(){
        const oldMember=this.userName+ ' '+this.password
        return oldMember
    }
}
const userOne=new loginAlreadyMember('autumn','autumn14@')
console.log(userOne.getOldMembers)
