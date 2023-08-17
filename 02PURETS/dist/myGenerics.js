"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Type is different to any. Once you pass an input it going to lock that input as  type and return as data ( type)
// identity 
// long format 
function identityThree(val) {
    return val;
}
// identityThree(5)
// short format 
function identityFour(val) {
    return val;
}
identityFour({ name: 'ali', age: 30 });
// identityFour<Bootle>({brand:'hp',type:40})
// function getSearchProducts<T>(product: T[]): T{
//     // do some database operations 
//     const myIndex = 3
//     return product[myIndex];
// } 
// **Generic in arrow function **
// we use comma to indicate it is generic not html element 
// arrow function 
const getSearchProducts = (product) => {
    // do some database operations 
    const myIndex = 4;
    return product[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
anotherFunction(5, { connection: 'connected', username: 'abdirahman_gabobe', password: '123abc' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
