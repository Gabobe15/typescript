interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string, 
  // startTrail: () => string 
  // another way of doing 
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}

// reopening of the interface means you can add values or code from other developers 

interface User {
  githubToken: string
}

// you can extend which will give you ability to get access to another code/interface 

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner'
}


const hcHitesh: Admin = 
{
   dbId:24, 
   email: 'gabobe@gmail.com',
   userId:123, 
   role: 'admin',
   googleId: 'qkj4543', 
   githubToken: '23k4',
   startTrail: () => {
  return "trail started"
},
// the name of the parameter you are passing can be of different name(couponname and name)
getCoupon(name: 'gabobe', off: 10) {
  return 19
}

}

// you cannot change readonly values 