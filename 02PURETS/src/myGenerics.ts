const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

// Type is different to any. Once you pass an input it going to lock that input as  type and return as data ( type)

// identity 
// long format 

function identityThree<Type>(val: Type): Type{
    return val
}

// identityThree(5)

// short format 
function identityFour<T>(val: T): T{
    return val
}
identityFour({name: 'ali', age:30})

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({brand:'hp',type:40})

// function getSearchProducts<T>(product: T[]): T{
//     // do some database operations 
//     const myIndex = 3
//     return product[myIndex];
// } 

// **Generic in arrow function **

// we use comma to indicate it is generic not html element 
// arrow function 

const getSearchProducts = <T,> (product: T[]) : T => {
    // do some database operations 
    const myIndex = 4
    return product[myIndex]
}


/** Generic classes **/ 
// we can pass more than one generic paramter 

// ex01

// function anotherFunction <T, U extends number>(valOne: T, valTwo: U): object {
//         return {valOne, valTwo}
// }

// // anotherFunction(5, 6)


// ex02

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction <T, U extends Database>(valOne: T, valTwo: U): object {
        return {valOne, valTwo}
}

anotherFunction(5, {connection:'connected', username:'abdirahman_gabobe', password:'123abc'})


// another complex example 
// assume we are selling courses and quiz 

interface Quiz {
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
