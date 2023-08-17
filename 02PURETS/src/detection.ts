// **type narrowing **

function detectType(val: number | string){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }
    return val  + 3
}

function provideId(id: string | null){
    if(!id){
        console.log('Please provide ID');
        return 
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null){
    if(strs){  // if there is string 
        if(typeof strs === 'object'){ //if the string type is object(Array)
            for(const s of strs){
                console.log(s);
                
            }
        }
        else if(typeof strs === 'string'){ //if the string type is string 
            console.log(strs);
        }
    }
}

// **the in operator narrowing ** 

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

// instance of and Type Predicates 
// instanceof can be used where there is new(keyword)
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}


// ex02 

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
} 

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }
    else {
        pet 
        return "bird food"
    }
}

// ** Discriminated Union**

interface Circle {
    kind: 'circle',
    radius: number
}

interface Square {
    kind: 'square',
    side: number
}

interface Rectangle {
    kind: 'rectangle',
    lenght: number,
    width: number
}

// checking type 
type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}

// ** exhaustivness Checking with never **

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.width * shape.width
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}

export {}