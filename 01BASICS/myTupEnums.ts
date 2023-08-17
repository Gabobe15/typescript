// array 
// const user: string[] = ['hc']

// tuple 
// the data plus the order are equally important 
// A good example is API call 

let user: [string, number, boolean] 
user = ['hc', 121, false]

// or rgba value 
let rgb: [number, number, number] = [244, 240, 222] 

type User = [number, string]

const newUser: User = [121, 'gabobe@gmail.com']
newUser[1] = 'hc.com' // we can over write the tuple and that is the down side

newUser.push('true')