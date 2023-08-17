function addTwo(num: number): number{ //controlling the return value 
    return num + 2
    // return 'hello world'
}

function getUpper(val:string){
    return val.toUpperCase()
}


function signUpUser(name: string, email:string, isPaid:boolean){
    // return {name, email, isPaid}
}

// arrow function 
let loginUser = (name: string, email: string, isPaid: boolean = false) => {} // we can give default value if there is not value given



addTwo(4)
getUpper("gabobe")
signUpUser('Abdirahman','gabobe33@gmail.com',false)
loginUser('abdi', 'abdi@gmail.co')


// restricting return value 

function getValue(myVal: number): boolean | string{
    if(myVal > 5){
        return true
    }
    return "200 OK"
}


const getHello = (s: string): string => {
    return ""
}

// array method 
// const heros = ['thor', 'spiderman', 'ironman']
const heros = [1,2,3,4]

heros.map((hero): string => {
    return `here is the list ${hero}`
})

// the function is not going to return value 

function consoleError(errormsg: string): void{ // explicitly 
    console.log(errormsg);
}

function handleError(errormsg: string): void{ // explicitly 
    console.log(errormsg);
}
