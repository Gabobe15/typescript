let score: number | string = 33
score = 44
score = '35'

type user = {
    name: string,
    id: number
}

type Admin = {
    username: string
    id: number
}

let hitesh: user | Admin = {name:'hitesh', id: 334}

hitesh = {username: 'hc', id: 334}


// function getDbId(id:number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if(typeof id === "string"){
        id.toLowerCase()
    }
    else if(typeof id === "number"){
        id + 2
    }
    return
}


//array 

const data: number[] = [1,2,3]
const data2: string[] = ['1','2','3']
const data3: string[] | number[] = ['1','2','3'] // it mean it can be all string or all numbers as return value
const data4: (string | number | boolean)[] = [1,'2',3,'4', false]

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'middle'
// seatAllotment = 'crew' 
// not found hence throws error 