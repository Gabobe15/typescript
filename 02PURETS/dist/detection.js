"use strict";
// **type narrowing **
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide ID');
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) { // if there is string 
        if (typeof strs === 'object') { //if the string type is object(Array)
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') { //if the string type is string 
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instance of and Type Predicates 
// instanceof can be used where there is new(keyword)
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
// ** exhaustivness Checking with never **
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
