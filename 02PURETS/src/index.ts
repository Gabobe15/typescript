// long way 
// class User {
//     name: string
//     email: string
//     private readonly city: string = 'afmadow'
//     constructor(name:string, email:string){
//         this.email = email
//         this.name = name
//     }
// }

// const hitesh = new User('gabobe', 'gabobe33@gmail.com')
// hitesh.name = 'abdirahman'
// console.log(hitesh.email);


// short code 
class User {
    // private _courseCount = 1
    protected _courseCount = 1
    private readonly city: string = 'afmadow'
    constructor(
        public name: string, 
        public email: string
        ){
    }

    private deleteToken(){
        console.log('Token delete');
    }

    get getAppleEmail(): string {
        return this.email
    }

    get courseCount():number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum
    }

}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const sub = new SubUser('gabobe', 'gabobe@gmail.com')

console.log(sub.name);


const hitesh = new User('gabobe','gabobe33@gmail.com')
// hitesh.deleteToken() //is a private and can only be accessed within the class 
