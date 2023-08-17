const User = {
    name: 'hitesh',
    email: 'hitesh@lco.dev',
    isActive: true
}

// we are going to pass object through function or return object in a function that is the use case

// function createUser({name: string, isPaid: boolean}){}
// const newUser = { name: "hitesh", isPaid: false, email: "gabobe33@gmail.com" };
// createUser(newUser) 
// bad behavior of object. we have have not passes email and it is not complaining

// function declaration
// function name
// return type
// return value
function createCourse():{name: string, price: number}{
    return {name: 'reactjs', price: 399}
}

// type aliases 
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return { name: "", email: "", isActive: true };
// }
// createUser({name: '', email:'', isActive: true})

// readonly and optional 

type User = {
  readonly _id: string; // you won't be able to change that
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number
};

let myUser: User = {
    _id: '1234',
    name: 'h',
    email: 'h@h.com',
    isActive: false,
    // creditCardDetails: 34 
    // option value
}

// change email 
// myUser._id = '243' 
// cannot change.it is readonly 



type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// we add another type and pass it as object 

type cardDetails = cardNumber & cardDate & {
    cvv: number
}




export {}